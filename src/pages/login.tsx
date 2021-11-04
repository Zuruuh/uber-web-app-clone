import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React from 'react';
import Button from '../components/base/Button';
import InputField from '../components/base/InputField';
import ContentCard from '../components/core/ContentCard';
import ContentWrapper from '../components/core/ContentWrapper';
import Layout from '../components/core/Layout';
import Router from 'next/router';
import { useAnonymousRoute } from '../hooks/auth/useAnonymousRoute';
import type { AuthInterface } from '../types';
import {
  faCheckCircle,
  faEnvelope,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import Stack from '../components/core/Stack';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';

import { useLogin } from '../hooks/auth/useLogin';
import { useFacebookAuth } from '../hooks/auth/useFacebookAuth';
import { useGoogleAuth } from '../hooks/auth/useGoogleAuth';

const Login: React.FC<{}> = ({}) => {
  useAnonymousRoute();
  const handleInput = async (
    values: AuthInterface,
    form: FormikHelpers<AuthInterface>,
  ) => {
    const res = await useLogin(values);
    if (res?.error) {
      const { field, message } = res.error;
      form.setFieldError(field, message);
    } else {
      Router.push('/');
    }
  };
  return (
    <>
      <Head>
        <title>Uber | Sign Up to Ride</title>
      </Head>
      <Layout>
        <ContentWrapper variant="regular" /* classes="p-5" */>
          <ContentCard title="Login to your account">
            <Formik
              initialValues={{ email: '', password: '' } as AuthInterface}
              onSubmit={async (values, form) => {
                await handleInput(values, form);
              }}
            >
              {({ isSubmitting }: FormikProps<AuthInterface>) => (
                <Form>
                  <InputField
                    name="email"
                    placeholder="email@address.com"
                    label="Email Address"
                    type="email"
                    icon={faEnvelope}
                  />
                  <InputField
                    name="password"
                    placeholder="********"
                    label="Password"
                    type="password"
                    icon={faLock}
                  />
                  <Button
                    text="Login"
                    isLoading={isSubmitting}
                    type="submit"
                    size="regular"
                    centered
                    background="#276EF1"
                    icon={faCheckCircle}
                  />
                </Form>
              )}
            </Formik>
          </ContentCard>
          <Stack wrap>
            <Button
              auto
              spaced
              centerContent
              icon={faGoogle}
              detachedIcon="left"
              size="large"
              background="#DB4437"
              onClick={async () => await useGoogleAuth()}
              text="Login with Google"
            />

            <Button
              auto
              spaced
              centerContent
              size="large"
              icon={faFacebookF}
              detachedIcon="left"
              background="#4267B2"
              onClick={async () => await useFacebookAuth()}
              text="Login with Facebook"
            />
          </Stack>
        </ContentWrapper>
      </Layout>
    </>
  );
};
export default Login;
