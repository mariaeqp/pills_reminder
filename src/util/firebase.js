import firebase from "firebase"
import 'firebase/storage';
import apikey from "./protect";

const firebaseConfig = {
    apiKey: apikey,
    authDomain: "pillsreminder-marieqp.firebaseapp.com",
    projectId: "pillsreminder-marieqp",
    storageBucket: "pillsreminder-marieqp.appspot.com",
    messagingSenderId: "10702431668",
    appId: "1:10702431668:web:43fe62f30af93f671dbee1"
  };

firebase.initializeApp(firebaseConfig);
export default firebase