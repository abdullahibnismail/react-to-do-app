import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBrVqXEtS4o-j-jO6-axRQcDGdZT7n8CbU",
  authDomain: "todo-app-in-react-5848f.firebaseapp.com",
  projectId: "todo-app-in-react-5848f",
  storageBucket: "todo-app-in-react-5848f.appspot.com",
  messagingSenderId: "372086072288",
  appId: "1:372086072288:web:3fdd15af4655c93d5c8185",
  measurementId: "G-7XGV42CRX9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  export const db = firebase.firestore();

//   export const storage = firebase.storage();
  export const auth = firebase.auth();