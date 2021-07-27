import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CircularButton from '../../elements/CircularButton';
import { header } from './header.module.scss';

const Header = ({ pageTitle }) => {
  return (
    <div className={header}>
      <h1>{pageTitle}</h1>
      <Link to='/Create'>
        <CircularButton />
      </Link>
    </div>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string,
};

export default Header;
