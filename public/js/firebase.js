let firebaseConfig = {
    apiKey: "AIzaSyD6eGBqxEfjRU1bfsBPX4dCo0y4qwwi32s",
    authDomain: "blogging-website-b6aa8.firebaseapp.com",
    projectId: "blogging-website-b6aa8",
    storageBucket: "blogging-website-b6aa8.appspot.com",
    messagingSenderId: "117438451573",
    appId: "1:117438451573:web:3de2735d5c9099bb73cd3c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db=firebase.firestore();