import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ id, label, ...rest }) => (
  <div>
    <input id={id} type='radio' {...rest} />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default Radio;

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
