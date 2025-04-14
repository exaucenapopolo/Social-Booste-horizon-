// Configuration Firebase
const firebaseConfig = {
  apiKey: "TA_CLE_API",
  authDomain: "TON_PROJET.firebaseapp.com",
  projectId: "TON_PROJET",
  storageBucket: "TON_PROJET.appspot.com",
  messagingSenderId: "TON_SENDER_ID",
  appId: "TON_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

// Inscription
function register() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const uid = userCredential.user.uid;
      db.collection("users").doc(uid).set({
        email: email,
        name: "",
        phone: "",
        profileImageUrl: ""
      });
      alert("Inscription réussie");
    })
    .catch(error => alert(error.message));
}

// Connexion
function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      showProfile(userCredential.user);
    })
    .catch(error => alert(error.message));
}

// Affichage du profil
function showProfile(user) {
  document.getElementById("register-section").style.display = "none";
  document.getElementById("login-section").style.display = "none";
  document.getElementById("profile-section").style.display = "block";
  document.getElementById("user-email").textContent = `Connecté en tant que : ${user.email}`;

  db.collection("users").doc(user.uid).get()
    .then(doc => {
      if (doc.exists) {
        const data = doc.data();
        document.getElementById('profile-name').value = data.name || "";
        document.getElementById('profile-phone').value = data.phone || "";
        if (data.profileImageUrl) {
          const img = document.getElementById('profile-pic');
          img.src = data.profileImageUrl;
          img.style.display = "block";
        }
      }
    });
}

// Modification du profil
function updateProfile() {
  const user = auth.currentUser;
  const name = document.getElementById('profile-name').value;
  const phone = document.getElementById('profile-phone').value;
  const imageFile = document.getElementById('profile-image').files[0];

  const userDocRef = db.collection("users").doc(user.uid);

  if (imageFile) {
    const imageRef = storage.ref(`profileImages/${user.uid}.jpg`);
    imageRef.put(imageFile).then(snapshot => {
      return snapshot.ref.getDownloadURL();
    }).then(downloadURL => {
      userDocRef.update({
        name: name,
        phone: phone,
        profileImageUrl: downloadURL
      }).then(() => {
        alert("Profil mis à jour avec image !");
        showProfile(user);
      });
    });
  } else {
    userDocRef.update({
      name: name,
      phone: phone
    }).then(() => {
      alert("Profil mis à jour !");
      showProfile(user);
    });
  }
}

// Déconnexion
function logout() {
  auth.signOut().then(() => {
    document.getElementById("register-section").style.display = "block";
    document.getElementById("login-section").style.display = "block";
    document.getElementById("profile-section").style.display = "none";
  });
}

// Auto-connexion
auth.onAuthStateChanged(user => {
  if (user) {
    showProfile(user);
  }
});