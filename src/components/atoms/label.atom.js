import React from 'react';
import PropTypes from 'prop-types';

import { Label } from '../styles';

const LabelAtom = (props) => {
  const { children, ...rest } = props;

  return <Label {...rest}>{children}</Label>;
};

LabelAtom.propTypes = {
  children: PropTypes.string.isRequired,
};

export default LabelAtom;
