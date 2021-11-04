import { useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';

export const useLogout = (): void => {
  const Router = useRouter();
  useEffect(() => {
    const logout = async () => {
      await signOut(getAuth());
    };
    logout();
    Router.replace('/');
  }, []);
};
