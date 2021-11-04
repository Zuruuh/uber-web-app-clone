import firebaseClient from './firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

export const googleAuth = async () => {
  firebaseClient();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');

  await signInWithPopup(auth, provider).catch(
    (error) =>
      !error.message.includes('auth/popup-closed-by-user') &&
      console.error(error),
  );
};
