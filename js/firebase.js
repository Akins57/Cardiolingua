// js/firebase.js
// Firebase SDK initialisation — imported by auth.js only.
//
// ── SETUP REQUIRED ────────────────────────────────────────────────────────────
// 1. Go to https://console.firebase.google.com
// 2. Create a project (e.g. "CardioLingua")
// 3. Authentication → Sign-in method → Enable "Google"
// 4. Authentication → Settings → Authorized domains → Add "akins57.github.io"
// 5. Firestore Database → Create database → Production mode
// 6. Firestore → Rules → paste the rules from the README / plan
// 7. Project Settings → Register web app → copy firebaseConfig here
// ─────────────────────────────────────────────────────────────────────────────

import { initializeApp }                         from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js'
import { getAuth, GoogleAuthProvider }            from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js'
import { getFirestore }                           from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'

// ── Paste your Firebase project config here ──────────────────────────────────
const firebaseConfig = {
  apiKey:            'AIzaSyCoU3trYJCxvmU_xyM8LY8grxmUtKRRdLY',
  authDomain:        'cardiolingua-3d5a9.firebaseapp.com',
  projectId:         'cardiolingua-3d5a9',
  storageBucket:     'cardiolingua-3d5a9.firebasestorage.app',
  messagingSenderId: '279104557257',
  appId:             '1:279104557257:web:4cff5751b5694018e0bd18'
}
// ─────────────────────────────────────────────────────────────────────────────

const app = initializeApp(firebaseConfig)

export const auth           = getAuth(app)
export const firestoreDB    = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
