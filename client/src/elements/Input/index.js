import React from 'react';
import PropTypes from 'prop-types';
import { input, inputError, filled, unfilled, star, errorMessage } from './input.module.scss';

const Input = ({ type, name, onChange, label, value, mandatory, error, disabled, max, min }) => {
  return (
    <div className={error ? inputError : input}>
      <input
        type={type}
        name={name}
        onChange={onChange}
        placeholder=' '
        value={value ?? ''}
        className={value != '' ? filled : unfilled}
        disabled={disabled}
        max={max}
        min={min}
      />
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
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  max: PropTypes.string,
  min: PropTypes.string,
};

export default Input;
