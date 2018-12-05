  // Initialize Firebase
  import firebase from 'firebase'
  
  var config = {
    apiKey: "AIzaSyDIRVAl6I4ix-s-HgOkQk5IKtzGe1b7UVM",
    authDomain: "scheduler-1a202.firebaseapp.com",
    databaseURL: "https://scheduler-1a202.firebaseio.com",
    projectId: "scheduler-1a202",
    storageBucket: "scheduler-1a202.appspot.com",
    messagingSenderId: "120812883110"
  };
 export let fire = firebase.initializeApp(config);
