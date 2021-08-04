import React from 'react';
import PropTypes from 'prop-types';
import { radioInnerWrapper } from './radio.module.scss';

const Radio = ({ id, label, ...rest }) => (
  <div className={radioInnerWrapper}>
    <input id={id} type='radio' {...rest} />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default Radio;

Radio.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.number,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
