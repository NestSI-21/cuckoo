import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CreateBtn from '../../elements/CreateBtn';
import { header } from './header.module.scss';

const Header = ({ pageTitle }) => {
  return (
    <div className={header}>
      <Link to='/Create'>
        <CreateBtn />
      </Link>
      <h1>{pageTitle}</h1>
    </div>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string,
};

export default Header;
