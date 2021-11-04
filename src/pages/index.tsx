import Layout from '../components/core/Layout';
import { useAuth } from '../hooks/auth/useAuth';
import ContentWrapper from '../components/core/ContentWrapper';
import Head from 'next/head';

const Home = ({}) => {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>Uber</title>
      </Head>
      <Layout>
        <ContentWrapper>
          {user ? (
            <div>
              <p>{`Welcome ${user.email}`}</p>
            </div>
          ) : (
            <p>{'You are not logged in :('}</p>
          )}
        </ContentWrapper>
      </Layout>
    </>
  );
};

export default Home;
