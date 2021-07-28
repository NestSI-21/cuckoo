import React from 'react';
import PropTypes from 'prop-types';
import { btnContainer, createBtn, closeBtn } from './circularbutton.module.scss';

const CircularButton = ({ close }) => {
  return (
    <div className={btnContainer}>
      {!close ? (
        <button className={createBtn}>
          <i className='fas fa-plus'></i>
        </button>
      ) : (
        <button className={closeBtn}>
          <i className='fas fa-plus'></i>
        </button>
      )}
    </div>
  );
};

CircularButton.propTypes = {
  close: PropTypes.bool,
};

export default CircularButton;
