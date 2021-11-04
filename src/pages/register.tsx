import React from 'react';
import ContentCard from '../components/core/ContentCard';
import ContentWrapper from '../components/core/ContentWrapper';
import Layout from '../components/core/Layout';
import RegisterForm from '../components/scoped/RegisterForm';
import { useAnonymousRoute } from '../hooks/auth/useAnonymousRoute';

const Register: React.FC<{}> = ({}) => {
  useAnonymousRoute();

  return (
    <Layout>
      <ContentWrapper variant="regular">
        <ContentCard title="Create a new account">
          <RegisterForm />
        </ContentCard>
      </ContentWrapper>
    </Layout>
  );
};
export default Register;
