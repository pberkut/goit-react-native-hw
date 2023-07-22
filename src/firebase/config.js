// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import {
//   API_KEY,
//   DOMAIN,
//   PORJECT_ID,
//   STORAGE_BUCKET,
//   SENDER_ID,
//   APP_ID,
// } from "react-native-dotenv";

const firebaseConfig = {
  apiKey: 'AIzaSyDdzPBNtNAnR-gHOk3lWtpDMIe62YiYhM4',
  authDomain: 'goit-react-native-hw-ea747.firebaseapp.com',
  projectId: 'goit-react-native-hw-ea747',
  storageBucket: 'goit-react-native-hw-ea747.appspot.com',
  messagingSenderId: '152256173710',
  appId: '1:152256173710:android:a2ede0de6cf297025c9bdf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
