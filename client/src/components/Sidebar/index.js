import React from 'react';
import dashboardIcon from '../../assets/icons/dashboard.svg';
import cuckoosIcon from '../../assets/icons/cuckoos.svg';
import companiesIcon from '../../assets/icons/companies.svg';
import profileIcon from '../../assets/icons/profile.svg';
import horizontalLogo from '../../assets/logos/logo-green.svg';
import cuckooIcon from '../../assets/logos/logo-icon.svg';
import { sidebar, sideNav, logo, icon, createBtn } from './sidebar.module.scss';
import { Link } from 'react-router-dom';
import CircularButton from '../../elements/CircularButton';

const Sidebar = () => {
  return (
    <div className={sidebar}>
      <img className={logo} src={horizontalLogo} alt='Cuckoo horizontal logo' />
      <img className={icon} src={cuckooIcon} alt='Cuckoo icon' />

      <ul className={sideNav}>
        <li>
          <a href='/dashboard'>
            <img src={dashboardIcon} alt='dashboard icon' />
            <span>Dashboard</span>
          </a>

          <a href='/cuckoos'>
            <img src={cuckoosIcon} alt='cuckoos icon' />
            <span>Cuckoos</span>
          </a>

          <div className={createBtn}>
            <Link to='/Create' className={createBtn}>
              <CircularButton />
            </Link>
          </div>

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
    </div>
  );
};

export default Sidebar;
