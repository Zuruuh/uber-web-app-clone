import firebaseClient from './firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import type { UserCredential } from 'firebase/auth';
import type { AuthError, AuthInterface, AuthResponse } from '../types';

export const authLogin = async ({
  email,
  password,
}: AuthInterface): Promise<AuthResponse> => {
  firebaseClient();

  let authError: AuthError;
  const res: UserCredential | void = await signInWithEmailAndPassword(
    getAuth(),
    email,
    password,
  ).catch(({ message }) => {
    let error: AuthError;
    switch (true) {
      case message.includes('auth/invalid-email'):
        error = {
          field: 'email',
          message: 'Please enter a valid email',
        };
        break;
      case message.includes('auth/user-not-found'):
        error = {
          field: 'email',
          message: 'This email is not in use.',
        };
        break;
      case message.includes('auth/wrong-password'):
        error = {
          field: 'password',
          message: 'Invalid password.',
        };
        break;
      case message.includes('auth/too-many-requests'):
        error = {
          field: 'email',
          message: 'You are being rate limited',
        };
        break;
      default:
        console.log(message);
        break;
    }
    authError = error;
  });

  if (authError) {
    return { error: authError };
  }
  if (res) {
    return { credentials: res };
  }
  console.error('Unexpected error');
  console.log(res);
};
