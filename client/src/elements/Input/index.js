import React from 'react';
import PropTypes from 'prop-types';
import { input } from './input.module.scss';

const Input = ({ type, name, mandatory, label }) => {
  return (
    <div className={input}>
      <input type={type} name={name} placeholder=' ' required={mandatory} />
      <label>{label}</label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  mandatory: PropTypes.bool,
  label: PropTypes.string,
};

export default Input;
