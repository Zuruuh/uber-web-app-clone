import Head from 'next/head';
import React from 'react';
import ContentWrapper from '../components/core/ContentWrapper';
import Layout from '../components/core/Layout';
import LoginForm from '../components/scoped/LoginForm';
import { useAnonymousRoute } from '../hooks/auth/useAnonymousRoute';

const Login: React.FC<{}> = ({}) => {
  useAnonymousRoute();

  return (
    <>
      <Head>
        <title>Uber | Sign Up to Ride</title>
      </Head>
      <Layout>
        <ContentWrapper variant="regular">
          <LoginForm />
        </ContentWrapper>
      </Layout>
    </>
  );
};
export default Login;
