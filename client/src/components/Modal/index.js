import React from 'react';
import PropTypes from 'prop-types';
import CircularButton from '../../elements/CircularButton';
import deleteButton from '../../assets/icons/deleteButton.svg';
import { modal, close, modalContainer, deleteBtn, confirm } from './modal.module.scss';

const Modal = ({ cuckooDelete }) => {
  return (
    <div className={modal}>
      <div className={modalContainer}>
        <div className={close}>
          <CircularButton close onClick={cuckooDelete} />
        </div>
        <img className={deleteBtn} src={deleteButton} alt='Delete Post' />
        <h3>Are you sure?</h3>
        <p>Your post will be deleted permanently from cuckoo.</p>
        <div className={confirm}>
          <button>Cancel</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  cuckooDelete: PropTypes.func,
};

export default Modal;
