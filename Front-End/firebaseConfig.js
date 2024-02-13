import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDUp5NaZfPjIgvk196hSKKDJg6SkD1rXVc',
  authDomain: 'test1-50b58.firebaseapp.com',
  databaseURL: 'https://test1-50b58.firebaseio.com',
  projectId: 'test1-50b58',
  storageBucket: 'test1-50b58.appspot.com',
  messagingSenderId: '662016335786',
  appId: '1:662016335786:android:b8e6ad145479d55f9915d3',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
