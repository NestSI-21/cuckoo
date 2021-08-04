import React from 'react';
import PropTypes from 'prop-types';
import { select } from './select.module.scss';

const Select = ({ options, label, ...rest }) => {
  return (
    <div className={select}>
      <select {...rest}>
        <option defaultValue disabled></option>
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
  required: PropTypes.bool,
};

export default Select;
