import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

export const environment = {
  

  firebase: {
    apiKey: "AIzaSyA23YsZ8EXdnl_7D3B0UqbnTwczQWHVdbs",
    authDomain: "todoapp-dfbd2.firebaseapp.com",
    projectId: "todoapp-dfbd2",
    storageBucket: "todoapp-dfbd2.appspot.com",
    messagingSenderId: "275705074038",
    appId: "1:275705074038:web:10be3cffcf862ec41daa57"
  },
  production: false,
};

export const app = initializeApp(environment.firebase);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);