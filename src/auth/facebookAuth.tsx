import firebaseClient from './firebase';
import { FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

export const facebookAuth = async () => {
  firebaseClient();
  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  provider.addScope('email');

  await signInWithPopup(auth, provider).catch(
    (error) =>
      !error.message.includes('auth/popup-closed-by-user') &&
      console.error(error),
  );
};
