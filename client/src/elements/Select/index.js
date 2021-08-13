import React from 'react';
import PropTypes from 'prop-types';
import { select } from './select.module.scss';

const Select = ({ name, value, onChange, options, label, required }) => {
  return (
    <div className={select}>
      <select name={name} value={value ?? ''} onChange={onChange} required={required}>
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
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.array,
  onChange: PropTypes.func,
  label: PropTypes.string,
  required: PropTypes.bool,
};

export default Select;
