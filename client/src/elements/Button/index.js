import React from 'react';
import PropTypes from 'prop-types';
import { button } from './button.module.scss';

const Button = ({ text, img, handle }) => {
  return (
    <button onClick={handle} className={button} type='button'>
      {img ? <img src={img} alt='' /> : null}
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  img: PropTypes.string,
  handle: PropTypes.func,
};

export default Button;