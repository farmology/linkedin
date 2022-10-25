import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBt_mrwd0WPMWdbQpE8fOUNpz4-KtndU84",
    authDomain: "linkedin-ae0dc.firebaseapp.com",
    projectId: "linkedin-ae0dc",
    storageBucket: "linkedin-ae0dc.appspot.com",
    messagingSenderId: "723030066338",
    appId: "1:723030066338:web:ec0e7160fd622906c943fb",
    measurementId: "G-H0NR639NZ1"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };