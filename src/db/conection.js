import  firebase  from "firebase";
import  "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAHHG_-ezrjf5QXgyk_hwo34-9I0FGk1qw",
    authDomain: "iami-d4e62.firebaseapp.com",
    databaseURL: "https://iami-d4e62.firebaseio.com",
    projectId: "iami-d4e62",
    storageBucket: "iami-d4e62.appspot.com",
    messagingSenderId: "490842463813",
    appId: "1:490842463813:web:6fe5d8a7dd554916ee0d2c"
  };

  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebaseApp.firestore().settings({timestampsInSnapshots: true});
  export default firebaseApp.firestore();
  // export default firebaseConfig;