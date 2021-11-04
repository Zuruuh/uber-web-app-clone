import React from 'react';
import NavBar from './Navbar';
import Container from './Container';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};
export default Layout;
