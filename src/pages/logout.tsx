import React from 'react';
import { useLogout } from '../hooks/auth/useLogout';

const Logout: React.FC<{}> = ({}) => {
  useLogout();
  return <></>;
};
export default Logout;
