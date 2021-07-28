import React from 'react';
import PropTypes from 'prop-types';
import { button, green, grey } from './button.module.scss';

const Button = ({ text, img, handle, style, type }) => {
  let classes = { green: green, grey: grey };

  return (
    <button onClick={handle} className={`${button} ${classes[style]}`} type={type}>
      {img ? <img src={img} alt='' /> : null}
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  handle: PropTypes.func,
  style: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
