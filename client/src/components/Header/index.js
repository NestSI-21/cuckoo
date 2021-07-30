import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CircularButton from '../../elements/CircularButton';
import { header, icon } from './header.module.scss';
import cuckooIcon from '../../assets/logos/logo-icon.svg';

const Header = ({ pageTitle }) => {
  return (
    <div className={header}>
      <img className={icon} src={cuckooIcon} alt='Cuckoo icon' />
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
