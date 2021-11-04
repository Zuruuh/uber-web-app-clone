import { getApps, initializeApp } from 'firebase/app';
import type { FirebaseOptions } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDZfHgp9GAbhBMxIniYf-Ti46hIB4wZ5Jw',
  authDomain: 'zuruh-uber-webapp.firebaseapp.com',
  databaseURL: 'https://zuruh-uber-webapp.firebaseio.com',
  projectId: 'zuruh-uber-webapp',
  storageBucket: 'zuruh-uber-webapp.appspot.com',
  messagingSenderId: '958528423780',
  appId: '1:958528423780:web:f57fd6049b1303e20b5c71',
} as FirebaseOptions;

export default function firebaseClient() {
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }
}
