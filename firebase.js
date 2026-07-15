import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwmY0eghiVz1njptpM_4ylk6DTO15EpCI",
  authDomain: "neko-store-9dbd1.firebaseapp.com",
  projectId: "neko-store-9dbd1",
  storageBucket: "neko-store-9dbd1.firebasestorage.app",
  messagingSenderId: "373922683235",
  appId: "1:373922683235:web:5790e3f35f5970a94d5b56"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);