import firebaseClient from '../../auth/firebase';
import { FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

export const useFacebookAuth = async () => {
  firebaseClient();
  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  provider.addScope('email');

  await signInWithPopup(auth, provider).catch((error) => console.error(error));
};
