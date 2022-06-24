// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_BWg-HWzAKO8qMLSFwFnBmuwJTC4A7fg",
  authDomain: "id2-app.firebaseapp.com",
  projectId: "id2-app",
  storageBucket: "id2-app.appspot.com",
  messagingSenderId: "507372298772",
  appId: "1:507372298772:web:a9852ff6f422b717f03d01"
};

// Initialize Firebase
let app;
if (getApps().length < 1) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApps();
}
const auth = getAuth(app);

export {auth};