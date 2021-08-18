import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.scss';

const Toast = ({ type }) => {
  {
    type === 'success' ? successToast : type === 'failure' ? failureToast : null;
  }
  const successToast = () => {
    toast('Your Cuckoo was posted! 🎉', {
      className: 'toast success',
    });
  };
  const failureToast = () => {
    toast('Something went wrong 😔', {
      className: 'toast failure',
    });
  };
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </>
  );
};

Toast.propTypes = {
  type: PropTypes.string,
};

export default Toast;
