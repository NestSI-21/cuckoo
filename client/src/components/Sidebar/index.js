import React from 'react';
import dashboardIcon from '../../assets/icons/dashboard.svg';
import cuckoosIcon from '../../assets/icons/cuckoos.svg';
import companiesIcon from '../../assets/icons/companies.svg';
import profileIcon from '../../assets/icons/profile.svg';
import horizontalLogo from '../../assets/logos/logo-green.svg';
import cuckooIcon from '../../assets/logos/logo-icon.svg';
import { sidebar, desktopMenu, mobileMenu, img1, img2 } from './sidebar.module.scss';
import { Link } from 'react-router-dom';
import CircularButton from '../../elements/CircularButton';

const Sidebar = () => {
  return (
    <div className={sidebar}>
      <img className={img1} src={horizontalLogo} alt='Cuckoo horizontal logo' />
      <img className={img2} src={cuckooIcon} alt='Cuckoo icon' />

      <ul className={desktopMenu}>
        <li>
          <a href='/dashboard'>
            <img src={dashboardIcon} alt='dashboard icon' />
            <span>Dashboard</span>
          </a>

          <a href='/cuckoos'>
            <img src={cuckoosIcon} alt='cuckoos icon' />
            <span>Cuckoos</span>
          </a>

          <a href='/companies'>
            <img src={companiesIcon} alt='companies icon' />
            <span>Companies</span>
          </a>

          <a href='/profile'>
            <img src={profileIcon} alt='profile icon' />
            <span>Profile</span>
          </a>
        </li>
      </ul>
      <div className={mobileMenu}>
        <ul>
          <li>
            <a href='/dashboard'>
              <img src={dashboardIcon} alt='dashboard icon' />
            </a>

            <a href='/cuckoos'>
              <img src={cuckoosIcon} alt='cuckoos icon' />
            </a>

            <Link to='/Create'>
              <CircularButton />
            </Link>

            <a href='/companies'>
              <img src={companiesIcon} alt='companies icon' />
            </a>

            <a href='/profile'>
              <img src={profileIcon} alt='profile icon' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
