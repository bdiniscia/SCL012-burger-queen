import firebase from 'firebase/app';
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyDuW6u94W1JN8zIw5TxOK1UNNZfyrJI1lo",
    authDomain: "burger-queen-f6c33.firebaseapp.com",
    databaseURL: "https://burger-queen-f6c33.firebaseio.com",
    projectId: "burger-queen-f6c33",
    storageBucket: "burger-queen-f6c33.appspot.com",
    messagingSenderId: "1081451171904",
    appId: "1:1081451171904:web:b79909f01da07880568fa5"
  };

firebase.initializeApp(config);

let db = firebase.firestore();
 
export default db;