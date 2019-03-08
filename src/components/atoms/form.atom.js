import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';

const Form = (props) => {
  const {
    children, onSubmit, initialValues, validation, ...rest
  } = props;

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validation}>
      {(formikProps) => {
        const { handleSubmit } = formikProps;
        return (
          <form {...rest} onSubmit={handleSubmit}>
            {children}
          </form>
        );
      }}
    </Formik>
  );
};

Form.propTypes = {
  children: PropTypes.any.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
};

export default Form;
