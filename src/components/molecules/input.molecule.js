import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'formik';

import { InputAtom, LabelAtom } from '../atoms';

const InputMolecule = (props) => {
  const { label, name, ...rest } = props;

  return (
    <Fragment>
      <LabelAtom>{label}</LabelAtom>
      <InputAtom name={name} {...rest} />
      <ErrorMessage name={name} />
    </Fragment>
  );
};

InputMolecule.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputMolecule;
