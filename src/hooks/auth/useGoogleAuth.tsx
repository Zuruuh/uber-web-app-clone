import firebaseClient from '../../auth/firebase';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

export const useGoogleAuth = async () => {
  firebaseClient();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');

  await signInWithPopup(auth, provider).catch(
    (error) =>
      !error.message.includes('auth/popup-closed-by-user') ??
      console.error(error),
  );
};
