import React, { useState, useEffect, useContext, createContext } from 'react';
import nookies from 'nookies';
import firebaseClient from '../../auth/firebase';
import { getAuth } from 'firebase/auth';
import type { User } from 'firebase/auth';
import 'firebase/auth';

interface AuthInterface {
  user: User | null;
}

const AuthContext = createContext<AuthInterface>({ user: null });

export const AuthProvider: React.FC<{}> = ({ children }) => {
  firebaseClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    return getAuth().onIdTokenChanged(
      async (user: User | null): Promise<React.Context<{}>> => {
        if (!user) {
          setUser(null);
          nookies.set(undefined, 'token', '', {
            maxAge: 60 * 60 * 24 * 7,
            sameSite: 'lax',
          });
          return;
        }
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, 'token', token, {});
      },
    );
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthInterface => useContext(AuthContext);
