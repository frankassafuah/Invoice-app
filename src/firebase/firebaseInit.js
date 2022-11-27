import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_-jUNc3gm9gLVVYU--vSA_sSOFqudCAg",
    authDomain: "invoice-ec919.firebaseapp.com",
    projectId: "invoice-ec919",
    storageBucket: "invoice-ec919.appspot.com",
    messagingSenderId: "715126127905",
    appId: "1:715126127905:web:782556d59956f50a05d260"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();