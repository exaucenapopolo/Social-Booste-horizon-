// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Configuration Firebase (clé API et autres informations)
// Assure-toi d'utiliser des clés restreintes dans la console Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBvVXfiFmnIVEZzaugsxt43ov0YU7quIhY",
  authDomain: "monsiteweb-beaee.firebaseapp.com",
  databaseURL: "https://monsiteweb-beaee-default-rtdb.firebaseio.com",
  projectId: "monsiteweb-beaee",
  storageBucket: "monsiteweb-beaee.firebasestorage.app",
  messagingSenderId: "847850292961",
  appId: "1:847850292961:web:17e085dd5ca2d299c119a0",
  measurementId: "G-DW73C4ZD0T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };