import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Layout = ({ hideHeaderSidebar, pageTitle, children }) => {
  return (
    <>
      {!hideHeaderSidebar && (
        <>
          <Header pageTitle={pageTitle} />
          <Sidebar />
        </>
      )}
      {children}
    </>
  );
};

Layout.propTypes = {
  hideHeaderSidebar: PropTypes.bool,
  pageTitle: PropTypes.string,
  children: PropTypes.node,
};

export default Layout;
