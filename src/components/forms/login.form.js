import React from 'react';
import * as Yup from 'yup';

import Input from '../molecules/input.molecule';
import { FormAtom, ButtonAtom } from '../atoms';

const LoginPage = (props) => {
  const initialValues = {
    emailAddress: '',
    password: '',
  };

  const validation = Yup.object().shape({
    emailAddress: Yup.string()
      .email()
      .required(),
    password: Yup.string().required(),
  });

  const handleSubmit = (values) => {
    console.log('submit', values);
  };

  return (
    <FormAtom initialValues={initialValues} onSubmit={handleSubmit} validation={validation}>
      <Input label="email address" name="emailAddress" />
      <Input type="password" label="password" name="password" />
      <ButtonAtom type="submit">Login</ButtonAtom>
    </FormAtom>
  );
};

export default LoginPage;
