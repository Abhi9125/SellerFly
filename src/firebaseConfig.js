// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHPwmINxi7kvasYThMG4l-APqCaof_coA",
  authDomain: "sellerfly-f75ca.firebaseapp.com",
  databaseURL: "https://sellerfly-f75ca-default-rtdb.firebaseio.com",
  projectId: "sellerfly-f75ca",
  storageBucket: "sellerfly-f75ca.appspot.com",
  messagingSenderId: "818025484192",
  appId: "1:818025484192:web:53b6d3384db68f63471ec5",
  measurementId: "G-B3VKXW9Z9Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
