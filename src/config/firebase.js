import firebase from 'firebase/app';
import 'firebase/firestore';

//Production App
const firebaseProdConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_PROD_PERSONAL_SITE_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_PROD_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRESTORE_PROD_DB_URL,
  projectId: process.env.REACT_APP_FIRESTORE_PROD_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRESTORE_PROD_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_PROD_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRESTORE_PROD_APP_ID
};

// Development App
/*
const firebaseDevConfig = {
  apiKey: process.env.REACT_APP_FIRESTORE_DEV_PERSONAL_SITE_KEY,
  authDomain: process.env.REACT_APP_FIRESTORE_DEV_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIRESTORE_DEV_DB_URL,
  projectId: process.env.REACT_APP_FIRESTORE_DEV_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIRESTORE_DEV_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIRESTORE_DEV_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIRESTORE_DEV_APP_ID
};
*/

firebase.initializeApp(firebaseProdConfig);
firebase.firestore();

export default firebase;
