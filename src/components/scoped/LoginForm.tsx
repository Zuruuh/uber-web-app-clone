import React from 'react';

import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckCircle,
  faEnvelope,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

import { Form, Formik, FormikHelpers, FormikProps } from 'formik';

import Router from 'next/router';
import Button from '../base/Button';
import InputField from '../base/InputField';
import ContentCard from '../core/ContentCard';
import Stack from '../core/Stack';

import { authLogin } from '../../auth/authLogin';
import { facebookAuth } from '../../auth/facebookAuth';
import { googleAuth } from '../../auth/googleAuth';
import type { AuthInterface } from '../../types';

const LoginForm: React.FC<{}> = ({}) => {
  const handleInput = async (
    values: AuthInterface,
    form: FormikHelpers<AuthInterface>,
  ) => {
    const res = await authLogin(values);
    if (res?.error) {
      const { field, message } = res.error;
      form.setFieldError(field, message);
    } else {
      Router.push('/');
    }
  };
  return (
    <>
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
          onClick={async () => await googleAuth()}
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
          onClick={async () => await facebookAuth()}
          text="Login with Facebook"
        />
      </Stack>
    </>
  );
};
export default LoginForm;
