import firebaseClient from './firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import type { UserCredential } from 'firebase/auth';
import type { AuthResponse, RegisterInterface, AuthError } from '../types';

export const authRegister = async ({
  email,
  password,
  repeatPassword,
}: RegisterInterface): Promise<AuthResponse> => {
  if (password !== repeatPassword) {
    return {
      error: {
        field: 'repeatPassword',
        message: 'Passwords does not match.',
      },
    };
  }
  firebaseClient();

  let authError: AuthError;
  const res: UserCredential | void = await createUserWithEmailAndPassword(
    getAuth(),
    email,
    password,
  ).catch(({ message }) => {
    console.log(message);
    let error: AuthError;
    switch (true) {
      case message.includes('auth/invalid-email'):
        error = {
          field: 'email',
          message: 'Please enter a valid email address.',
        };
        break;
      case message.includes('auth/weak-password'):
        error = {
          field: 'password',
          message: 'Your password should be at least 6 characters.',
        };
        break;
      case message.includes('auth/email-already-in-use'):
        error = {
          field: 'password',
          message: 'This email is already in use.',
        };
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
};
