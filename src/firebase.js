import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBQSVuZGy6au1TDJOvnFgAYfG8PRWMnY90",
    authDomain: "reactjsgymproject.firebaseapp.com",
    databaseURL: "https://reactjsgymproject.firebaseio.com",
    projectId: "reactjsgymproject",
    storageBucket: "reactjsgymproject.appspot.com",
    messagingSenderId: "804052329299",
    appId: "1:804052329299:web:ddd775b6928476669a77a6",
    measurementId: "G-TG9QWDN4FN"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;