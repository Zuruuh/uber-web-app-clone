import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import Router from 'next/router';
import React from 'react';
import { authRegister } from '../../auth/authRegister';
import type { RegisterInterface } from '../../types';
import Button from '../base/Button';
import InputField from '../base/InputField';
const RegisterForm: React.FC<{}> = ({}) => {
  const handleInput = async (
    values: RegisterInterface,
    form: FormikHelpers<RegisterInterface>,
  ) => {
    const res = await authRegister(values);
    if (res?.error) {
      const { field, message } = res.error;
      form.setFieldError(field, message);
    } else {
      Router.push('/');
    }
  };
  return (
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
  );
};
export default RegisterForm;
