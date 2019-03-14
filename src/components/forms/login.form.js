import React, { useState, Fragment } from 'react';
import * as Yup from 'yup';

import Input from '../molecules/input.molecule';
import { FormAtom, ButtonAtom } from '../atoms';
import login from '../../api/authentication.api';

const LoginPage = (props) => {
  const [loginError, setLoginError] = useState(null);

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

  const handleSubmit = async (values) => {
    try {
      const loginResult = await login(values);
      if (loginResult.data) {
        sessionStorage.setItem('authToken', loginResult.data.token);
        // Redirect 'home' and display name from auth token /me call
      }
    } catch (e) {
      if (e.response.status === 401) {
        setLoginError('Wrong email or password. Please try again.');
      }
    }
  };

  return (
    <Fragment>
      <FormAtom initialValues={initialValues} onSubmit={handleSubmit} validation={validation}>
        <Input label="email address" name="emailAddress" />
        <Input type="password" label="password" name="password" />
        <ButtonAtom type="submit">Login</ButtonAtom>
      </FormAtom>
      <p>{loginError}</p>
    </Fragment>
  );
};

export default LoginPage;
