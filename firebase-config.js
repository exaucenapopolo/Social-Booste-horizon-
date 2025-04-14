// firebase-config.js

// Importez les fonctions nécessaires depuis le CDN Firebase (version 9)
// Vous pouvez ajouter d'autres services Firebase si besoin
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

// Votre configuration Firebase (veillez à ne pas partager ces données publiquement)
const firebaseConfig = {
  apiKey: "AIzaSyBvVXfiFmnIVEZzaugsxt43ov0YU7quIhY",
  authDomain: "monsiteweb-beaee.firebaseapp.com",
  projectId: "monsiteweb-beaee",
  storageBucket: "monsiteweb-beaee.firebasestorage.app",
  messagingSenderId: "847850292961",
  appId: "1:847850292961:web:17e085dd5ca2d299c119a0",
  measurementId: "G-DW73C4ZD0T"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exportez l'instance Firebase pour pouvoir l'utiliser dans d'autres modules
export { app, analytics };