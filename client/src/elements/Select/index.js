import React from 'react';
import PropTypes from 'prop-types';
import { select } from './select.module.scss';

const Select = ({ name, value, content, placeholder }) => {
  return (
    <div className={select}>
      <select name={name}>
        <option value='null' selected='true' disabled='disabled'>
          {' '}
        </option>
        <option value={value}>{content}</option>
      </select>
      <label>{placeholder}</label>
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  content: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Select;
