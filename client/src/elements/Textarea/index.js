import React from 'react';
import PropTypes from 'prop-types';
import { textarea } from './textarea.module.scss';

const Textarea = ({ name, placeholder }) => {
  return (
    <div className={textarea}>
      <textarea name={name} placeholder=' ' rows={6}></textarea>
      <label>{placeholder}</label>
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textarea;
