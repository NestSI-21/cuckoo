import React from 'react';
import PropTypes from 'prop-types';
import { input, inputError, star, errorMessage } from './input.module.scss';

const Input = ({ type, name, onChange, label, value, mandatory, error }) => {
  return (
    <div className={!error ? input : inputError}>
      <input type={type} name={name} onChange={onChange} placeholder=' ' value={value ?? ''} />
      <label>{label}</label>
      {mandatory ? (
        <span className={star}>
          <i className='fas fa-asterisk'></i>
        </span>
      ) : null}
      {error ? <p className={errorMessage}>{error}</p> : null}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  mandatory: PropTypes.bool,
  error: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Input;
