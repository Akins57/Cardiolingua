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
  apiKey:            'PASTE_YOUR_API_KEY_HERE',
  authDomain:        'PASTE_YOUR_AUTH_DOMAIN_HERE',
  projectId:         'PASTE_YOUR_PROJECT_ID_HERE',
  storageBucket:     'PASTE_YOUR_STORAGE_BUCKET_HERE',
  messagingSenderId: 'PASTE_YOUR_SENDER_ID_HERE',
  appId:             'PASTE_YOUR_APP_ID_HERE'
}
// ─────────────────────────────────────────────────────────────────────────────

const app = initializeApp(firebaseConfig)

export const auth           = getAuth(app)
export const firestoreDB    = getFirestore(app)
export const googleProvider = new GoogleAuthProvider()
