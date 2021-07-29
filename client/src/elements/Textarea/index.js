import React from 'react';
import PropTypes from 'prop-types';
import { textarea } from './textarea.module.scss';

const Textarea = ({ name, onChange, label }) => {
  return (
    <div className={textarea}>
      <textarea name={name} onChange={onChange} placeholder=' '></textarea>
      <label>{label}</label>
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default Textarea;
