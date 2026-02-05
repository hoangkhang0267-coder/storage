import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTQx24VQZrZN_gtybBhik6TlunRdJhhUo",
  authDomain: "photo-f1054.firebaseapp.com",
  projectId: "photo-f1054",
  storageBucket: "photo-f1054.firebasestorage.app",
  messagingSenderId: "734842494732",
  appId: "1:734842494732:web:4f2f58baaab39b2666f329"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


export const SUPABASE_URL = "https://rwybfjvzlepjoahclvry.supabase.co";
export const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3eWJmanZ6bGVwam9haGNsdnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAyMzQ1MTQsImV4cCI6MjA4NTgxMDUxNH0.9invSLQuWg52e8fAf-IJAh4ehTRzTfP33XFwdKrU9_8";

