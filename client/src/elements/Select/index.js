import React from 'react';
import PropTypes from 'prop-types';
import { select } from './select.module.scss';

const Select = ({ name, value, content, label, mandatory }) => {
  return (
    <div className={select}>
      <select name={name} required={mandatory}>
        <option selected disabled></option>
        <option value={value}>{content}</option>
      </select>
      <label>{label}</label>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  content: PropTypes.string,
  label: PropTypes.string,
  mandatory: PropTypes.bool,
};

export default Select;
