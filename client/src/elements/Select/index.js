import React from 'react';
import PropTypes from 'prop-types';
import {
  select,
  selected,
  unselected,
  selectError,
  star,
  errorMessage,
} from './select.module.scss';

const Select = ({ name, value, onChange, options, label, error, mandatory }) => {
  return (
    <div className={!error ? select : selectError}>
      <i className='fas fa-sort-down'></i>
      <select
        className={value != '' ? selected : unselected}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option defaultValue hidden></option>
        {options.map((option, i) => {
          return (
            <option key={i} value={option.id}>
              {option.name}
            </option>
          );
        })}
      </select>
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

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array,
  onChange: PropTypes.func,
  mandatory: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
};

export default Select;
