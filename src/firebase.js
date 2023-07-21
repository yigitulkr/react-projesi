import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'; 
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBJnkVSKLNnPHkDD6EUiwDbYMvpvENNbJQ",
    authDomain: "posts-app-67957.firebaseapp.com",
    projectId: "posts-app-67957",
    storageBucket: "posts-app-67957.appspot.com",
    messagingSenderId: "959078084317",
    appId: "1:959078084317:web:13e9fcccede9992edc7534",
  };

 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app); 
 export const db = getFirestore(app);