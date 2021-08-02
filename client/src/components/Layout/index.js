import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { appWrapper } from './layout.module.scss';

const Layout = ({ hideSidebar, pageTitle, hideCreateBtn, children }) => {
  return (
    <div className={appWrapper}>
      {!hideSidebar && <Sidebar />}
      <div>
        {!hideSidebar && <Header pageTitle={pageTitle} hideCreateBtn={hideCreateBtn} />}
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  hideSidebar: PropTypes.bool,
  pageTitle: PropTypes.string,
  hideCreateBtn: PropTypes.bool,
  children: PropTypes.node,
};

export default Layout;
