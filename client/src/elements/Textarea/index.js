import React from 'react';
import PropTypes from 'prop-types';
import { textarea } from './textarea.module.scss';

const Textarea = ({ name, label }) => {
  return (
    <div className={textarea}>
      <textarea name={name} placeholder=' '></textarea>
      <label>{label}</label>
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};

export default Textarea;
