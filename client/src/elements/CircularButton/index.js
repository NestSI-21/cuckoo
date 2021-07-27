import React from 'react';
import PropTypes from 'prop-types';
import { btnContainer, createBtn, closeBtn } from './circularbutton.module.scss';

const CircularButton = ({ close }) => {
  return (
    <div className={btnContainer}>
      {!close ? <button className={createBtn}>+</button> : <button className={closeBtn}>+</button>}
    </div>
  );
};

CircularButton.propTypes = {
  close: PropTypes.bool,
};

export default CircularButton;
