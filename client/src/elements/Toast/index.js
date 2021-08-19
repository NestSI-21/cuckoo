import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './toast.scss';

const Toast = () => {
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
export default Toast;
