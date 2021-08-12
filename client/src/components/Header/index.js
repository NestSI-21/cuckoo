import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CircularButton from '../../elements/CircularButton';
import { header, headerVisible, headerHidden, icon } from './header.module.scss';
import cuckooIcon from '../../assets/logos/logo-icon.svg';

const Header = ({ pageTitle, hideCreateBtn }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    setShowHeader(document.body.getBoundingClientRect().top > scrollPos);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className={`${header} && ${showHeader ? headerVisible : headerHidden}`}>
      <img className={icon} src={cuckooIcon} alt='Cuckoo icon' />
      <h1>{pageTitle}</h1>
      {!hideCreateBtn && (
        <Link to='/Create'>
          <CircularButton />
        </Link>
      )}
    </div>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string,
  hideCreateBtn: PropTypes.bool,
};

export default Header;
