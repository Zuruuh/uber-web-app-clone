import React from 'react';
import NextLink from 'next/link';
import Button from '../base/Button';
import { useAuth } from '../../hooks/auth/useAuth';

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const { user } = useAuth();
  return (
    <nav className="flex justify-between p-4 bg-black">
      <h1 className="font-uber-medium text-2xl text-white mx-2 cursor-pointer">
        <NextLink href="/">Uber</NextLink>
      </h1>
      <div className="flex flex-row-reverse">
        {user ? (
          <div>
            <NextLink href="/logout">
              <Button text="Log out" rounded />
            </NextLink>
          </div>
        ) : (
          <>
            <div>
              <NextLink href="/register">
                <Button text="Sign up" rounded bold />
              </NextLink>
            </div>
            <div>
              <NextLink href="/login">
                <Button text="Log in" rounded />
              </NextLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
