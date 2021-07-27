import React from 'react';
import PropTypes from 'prop-types';
import { input } from './input.module.scss';

const Input = ({ type, name, placeholder, mandatory }) => {
  return (
    <div className={input}>
      <input type={type} name={name} placeholder=' ' required={mandatory} />
      <label>{placeholder}</label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  mandatory: PropTypes.bool,
};

export default Input;
