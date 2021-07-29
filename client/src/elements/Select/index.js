import React from 'react';
import PropTypes from 'prop-types';
import { select } from './select.module.scss';

const Select = ({ name, options, onChange, label, mandatory }) => {
  return (
    <div className={select}>
      <select name={name} onChange={onChange} required={mandatory}>
        <option defaultValue></option>
        {options.map((option, i) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <label>{label}</label>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string,
  mandatory: PropTypes.bool,
};

export default Select;
