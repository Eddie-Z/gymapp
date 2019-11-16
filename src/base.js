import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCpPbMa60FSCYYtVL-6GgEmj5Svytyi0Jc",
    authDomain: "catch-of-the-day-eddie-62c7d.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-eddie-62c7d.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
