import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage as FormikMessage } from 'formik';

import { ErrorMessage } from '../styles';

const ErrorMessageAtom = ({ name }) => (
  <ErrorMessage>
    <FormikMessage name={name} />
  </ErrorMessage>
);

ErrorMessageAtom.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ErrorMessageAtom;
