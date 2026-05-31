// js/auth.js
// Google sign-in, sign-out, and Firestore ↔ IndexedDB sync.
// Imported once by app.js bootstrap().

import { auth, firestoreDB, googleProvider }  from './firebase.js'
import {
  onAuthStateChanged,
  signInWithRedirect,
  getRedirectResult,
  signOut
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'
import {
  collection,
  doc,
  setDoc,
  getDocs
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'
import { getAllSRS, getSRS, putSRS, setSRSSyncHook } from './db.js'

// ── State ─────────────────────────────────────────────────────────────────────

let _currentUser = null

export function getCurrentUser() { return _currentUser }

// ── Firestore helpers ─────────────────────────────────────────────────────────

/**
 * Write one SRS state to Firestore.  Called via db.js hook on every rating.
 * Fire-and-forget — never blocks the UI.
 */
export async function syncSRSToCloud(state) {
  if (!_currentUser) return
  await setDoc(
    doc(firestoreDB, 'users', _currentUser.uid, 'srs', state.id),
    state
  )
}

/**
 * On sign-in: pull all cloud SRS states and write any that are newer than local.
 */
async function syncFromCloud(uid) {
  const snapshot = await getDocs(collection(firestoreDB, 'users', uid, 'srs'))
  for (const snap of snapshot.docs) {
    const cloud = snap.data()
    const local = await getSRS(cloud.id)
    // Cloud wins if: local never reviewed, OR cloud reviewed more recently
    if (
      !local ||
      !local.lastReview ||
      (cloud.lastReview && cloud.lastReview > local.lastReview)
    ) {
      await putSRS(cloud)
    }
  }
}

/**
 * On sign-in: push all locally-reviewed cards to Firestore.
 * Covers the case where the user has progress on this device but not yet in cloud.
 */
async function pushLocalToCloud(uid) {
  const localStates = await getAllSRS()
  const batch = localStates.filter(s => s.lastReview !== null)
  await Promise.all(
    batch.map(state =>
      setDoc(doc(firestoreDB, 'users', uid, 'srs', state.id), state)
        .catch(() => {})  // ignore individual failures
    )
  )
}

// ── Nav UI ────────────────────────────────────────────────────────────────────

function getAuthBtn() { return document.getElementById('authBtn') }

function updateNavUI(user) {
  const btn = getAuthBtn()
  if (!btn) return

  if (user) {
    // Signed in — show avatar (photo or initials)
    if (user.photoURL) {
      btn.innerHTML = `<img src="${user.photoURL}"
                            alt="${user.displayName || 'User'}"
                            class="auth-avatar"
                            referrerpolicy="no-referrer">`
    } else {
      const initial = (user.displayName || user.email || '?')[0].toUpperCase()
      btn.innerHTML = `<span class="auth-avatar-placeholder">${initial}</span>`
    }
    btn.title   = `${user.displayName || user.email}\nTap to sign out`
    btn.onclick = () => signOut(auth)
  } else {
    // Signed out — show Google "G" sign-in icon
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>`
    btn.title   = 'Sign in with Google to sync progress across devices'
    btn.onclick = () => signInWithRedirect(auth, googleProvider)
  }
}

// ── Init ─────────────────────────────────────────────────────────────────────

export function initAuth() {
  // Register the sync hook so every putSRS() also writes to Firestore
  setSRSSyncHook(syncSRSToCloud)

  // Handle the redirect result when returning from Google sign-in page
  getRedirectResult(auth).catch(err => {
    if (err.code !== 'auth/cancelled-popup-request') console.warn('Auth redirect error:', err)
  })

  onAuthStateChanged(auth, async user => {
    _currentUser = user
    updateNavUI(user)

    if (user) {
      try {
        // Pull cloud → merge into local, then push local → cloud
        await syncFromCloud(user.uid)
        await pushLocalToCloud(user.uid)
      } catch (err) {
        console.warn('Sync error:', err)
      }
    }
  })
}
