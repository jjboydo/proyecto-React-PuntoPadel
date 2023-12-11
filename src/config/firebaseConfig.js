// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeFPtfx6gCbGJeHCB4tje-UM3IE1CmJHA",
  authDomain: "punto-padel-f8a42.firebaseapp.com",
  projectId: "punto-padel-f8a42",
  storageBucket: "punto-padel-f8a42.appspot.com",
  messagingSenderId: "788892721363",
  appId: "1:788892721363:web:2baa065f89518d3efaf426"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)