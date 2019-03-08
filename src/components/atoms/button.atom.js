import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../styles';

const ButtonAtom = (props) => {
  const { children, ...rest } = props;

  return <Button {...rest}>{children}</Button>;
};

ButtonAtom.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ButtonAtom;
