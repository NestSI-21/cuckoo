import React from 'react';
import PropTypes from 'prop-types';
import { input } from './input.module.scss';

const Input = ({ type, name, placeholder }) => {
  return (
    <div className={input}>
      <input type={type} name={name} placeholder=' ' />
      <label>{placeholder}</label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
