import React from 'react';
import firebase from 'firebase'
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyACMAK45O5HY0L6Ema0TkxEQtBX3F48HkU",
    authDomain: "netflix-clone-b8a18.firebaseapp.com",
    projectId: "netflix-clone-b8a18",
    storageBucket: "netflix-clone-b8a18.appspot.com",
    messagingSenderId: "519067746363",
    appId: "1:519067746363:web:6a997941fc1b9b3b279c1e"
  };
    const firebaseApp = firebase.initializeApp(firebaseConfig);

    const db=firebaseApp.firestore();
    const auth = firebase.auth();


    export {auth}
    export default db;

    

//  key-- 1dda96599a87e70120c8d4a1d3d20e78


// import firebase  from "firebase";
// // import * as firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/firestore';


// const firebaseApp =firebase.initializeApp({
//     apiKey: "AIzaSyACMAK45O5HY0L6Ema0TkxEQtBX3F48HkU",
//     authDomain: "netflix-clone-b8a18.firebaseapp.com",
//     projectId: "netflix-clone-b8a18",
//     storageBucket: "netflix-clone-b8a18.appspot.com",
//     messagingSenderId: "519067746363",
//     appId: "1:519067746363:web:6a997941fc1b9b3b279c1e"
// })

// // const db =firebaseApp.firestore();
// const auth =firebase.auth();

// export { auth}