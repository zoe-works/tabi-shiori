// Firebase Configuration
import { initializeApp } from 'firebase/app';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, linkWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCh5zX-2AgcibKw-tCvXpsFuRA9POYFt-Y",
  authDomain: "my-trip-record.firebaseapp.com",
  projectId: "my-trip-record",
  storageBucket: "my-trip-record.firebasestorage.app",
  messagingSenderId: "656393008816",
  appId: "1:656393008816:web:307ff5f1ee6e509242ad75",
  measurementId: "G-8SQ1KTE1YP"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore with offline persistence
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
});

export const storage = getStorage(app);
export const auth = getAuth(app);

// Anonymous auth
export function ensureAuth() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user); // ログインしていない場合は null を返す
    });
  });
}

const googleProvider = new GoogleAuthProvider();

export async function loginWithGoogle() {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

export async function linkGoogleAccount() {
  const result = await linkWithPopup(auth.currentUser, googleProvider);
  return result.user;
}

export default app;
