// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD0iIbZcSjjzM_uCj0HZeR2i1yCSOnT5vg",
  authDomain: "auth-945da.firebaseapp.com",
  projectId: "auth-945da",
  storageBucket: "auth-945da.appspot.com",
  messagingSenderId: "691763889440",
  appId: "1:691763889440:web:207f522f052e3d306f8345",
  measurementId: "G-700Y3ZSH6Q",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      alert("You are Signed Up");
      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Firebase code for signing in
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in successfully
      alert("You are Signed In");
      console.log(result);

      // Redirect to another page upon successful sign-in
      window.location.href = "ui.html";
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);

      // Handle the error appropriately (e.g., display an error message to the user)
    });
};
// Function to redirect to a specific URL
const redirectToURL = (url) => {
  window.location.href = url;
};

// Redirect functions for specific URLs
const redirectToAvgTempSensorData = () => {
  redirectToURL("http://localhost:8080/api/avgTempsensorData");
};

const redirectToSensorData = () => {
  redirectToURL("http://localhost:8080/api/sensorData");
};

const redirectToAvgPressureSensorData = () => {
  redirectToURL("http://localhost:8080/api/avgPressureSensorData");
};

// Sign Out function
const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      alert("You are Signed Out");
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
