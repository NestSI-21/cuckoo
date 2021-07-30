import React from 'react';
import PropTypes from 'prop-types';
import { input } from './input.module.scss';

const Input = ({ type, name, onChange, label, required }) => {
  return (
    <div className={input}>
      <input type={type} name={name} onChange={onChange} placeholder=' ' required={required} />
      <label>{label}</label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.bool,
};

export default Input;
