import firebaseClient from '../../auth/firebase';
import { useAuth } from './useAuth';
import { useRouter } from 'next/router';

export const useAnonymousRoute = (): void => {
  firebaseClient();
  const { user } = useAuth();
  const router = useRouter();
  if (user) {
    router.replace('/');
  }
};
