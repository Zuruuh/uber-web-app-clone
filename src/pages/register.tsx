import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import React from 'react';
import Button from '../components/base/Button';
import ContentCard from '../components/core/ContentCard';
import ContentWrapper from '../components/core/ContentWrapper';
import InputField from '../components/base/InputField';
import Layout from '../components/core/Layout';
import Router from 'next/router';
import { useRegister } from '../hooks/auth/useRegister';
import { useAnonymousRoute } from '../hooks/auth/useAnonymousRoute';
import type { RegisterInterface } from '../types';

const Register: React.FC<{}> = ({}) => {
  useAnonymousRoute();
  const handleInput = async (
    values: RegisterInterface,
    form: FormikHelpers<RegisterInterface>,
  ) => {
    const res = await useRegister(values);
    if (res?.error) {
      const { field, message } = res.error;
      form.setFieldError(field, message);
    } else {
      Router.push('/');
    }
  };
  return (
    <Layout>
      <ContentWrapper variant="regular">
        <ContentCard title="Create a new account">
          <Formik
            initialValues={
              {
                email: '',
                password: '',
                repeatPassword: '',
              } as RegisterInterface
            }
            onSubmit={async (values, form) => {
              await handleInput(values, form);
            }}
          >
            {({ isSubmitting }: FormikProps<RegisterInterface>) => (
              <Form>
                <InputField
                  name="email"
                  placeholder="email@address.com"
                  label="Email Address"
                  type="email"
                />
                <InputField
                  name="password"
                  placeholder="********"
                  label="Password"
                  type="password"
                />
                <InputField
                  name="repeatPassword"
                  placeholder="********"
                  label="Repeat password"
                  type="password"
                />
                <Button
                  text="Register"
                  isLoading={isSubmitting}
                  type="submit"
                  size="regular"
                  centered
                />
              </Form>
            )}
          </Formik>
        </ContentCard>
      </ContentWrapper>
    </Layout>
  );
};
export default Register;
