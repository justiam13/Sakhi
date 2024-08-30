// FirebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBHCrg84S75YZ8EVfDAiedXI0LBwmgoWAQ",
  authDomain: "sakhi-1803d.firebaseapp.com",
  projectId: "sakhi-1803d",
  storageBucket: "sakhi-1803d.appspot.com",
  messagingSenderId: "879950743194",
  appId: "1:879950743194:web:5fc9812546724ca3a0c123",
  measurementId: "G-NG248J6MRN"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

export { auth, db };
