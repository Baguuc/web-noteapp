// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK0RbgTnN50y7haYbr1g8T-ny1GPG7DYo",
  authDomain: "noteapp-dafc8.firebaseapp.com",
  projectId: "noteapp-dafc8",
  storageBucket: "noteapp-dafc8.appspot.com",
  messagingSenderId: "1036615128692",
  appId: "1:1036615128692:web:cb5404787af40b6a89e321",
  measurementId: "G-ZESBPYFR7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

// Initialize collections
const collections = {
    notes: collection(database, 'notes' /* this will be the collection you want to notes be stored in. Name it like you want. */),
}

// export needed variables
export { app, database, collections }