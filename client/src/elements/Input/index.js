import React from 'react';
import PropTypes from 'prop-types';
import { input } from './input.module.scss';

const Input = ({ type, name, onChange, mandatory, label }) => {
  return (
    <div className={input}>
      <input type={type} name={name} onChange={onChange} placeholder=' ' required={mandatory} />
      <label>{label}</label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  mandatory: PropTypes.bool,
  label: PropTypes.string,
};

export default Input;
