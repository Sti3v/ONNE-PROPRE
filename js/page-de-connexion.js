// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyBeLTJ3FzhobWw0Uv6hiCtltq3PEkkhssY",
  authDomain: "onne-propre.firebaseio.com",
  databaseURL: "https://onne-propre.firebaseio.com",
  projectId: "onne-propre",
  storageBucket: "onne-propre.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
console.log(password);
console.log(email);


// Create an account
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    let user = userCredential.user;
    // ...const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(password);
    console.log(email);
    
    // Créer un compte
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Connecté
        let user = userCredential.user;
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        // ..
      });
    
    // Se connecter
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Connecté
        let user = userCredential.user;
        // ...
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
      });
    
    // Se déconnecter
    firebase.auth().signOut().then(() => {
      // Déconnexion réussie.
    }).catch((error) => {
      // Une erreur s'est produite.
    });
    
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    // ..
  });

// Sign in
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    let user = userCredential.user;
    // ...
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
  });

// Sign out
firebase.auth().signOut().then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
