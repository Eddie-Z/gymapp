import firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB_0xlCydAuahjIUT-cCGHqKz1QDjnEZv0",
    authDomain: "gymapp1-637bb.firebaseapp.com",
    databaseURL: "https://gymapp1-637bb.firebaseio.com",
    projectId: "gymapp1-637bb",
    storageBucket: "gymapp1-637bb.appspot.com",
    messagingSenderId: "418455911867",
    appId: "1:418455911867:web:8882f0ecc72d56e717989e",
    measurementId: "G-Z70ZZZG3CM"
});

export default firebaseConfig;