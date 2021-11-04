import firebaseClient from '../../auth/firebase';
import { useAuth } from './useAuth';
import { useRouter } from 'next/router';
import type { User } from 'firebase/auth';

export const useAuthRoute = (): User => {
  firebaseClient();
  const { user } = useAuth();
  const router = useRouter();
  if (!user) {
    router.replace('/login');
  }
  return user;
};
