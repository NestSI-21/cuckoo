import React from 'react';

import dashboardIcon from '../../assets/icons/dashboard.svg';
import cuckoosIcon from '../../assets/icons/cuckoos.svg';
import companiesIcon from '../../assets/icons/companies.svg';
import profileIcon from '../../assets/icons/profile.svg';

import horizontalLogo from '../../assets/logos/logo-horizontal.png';
import { sidebar } from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={sidebar}>
      <img src={horizontalLogo} alt='Cuckoo horizontal logo' />

      <ul>
        <li>
          <a href='#'>
            <img src={dashboardIcon} alt='dashboard icon' />
            <span>Dashboard</span>
          </a>

          <a href='#'>
            <img src={cuckoosIcon} alt='cuckoos icon' />
            <span>Cuckoos</span>
          </a>

          <a href='#'>
            <img src={companiesIcon} alt='companies icon' />
            <span>Companies</span>
          </a>

          <a href='#'>
            <img src={profileIcon} alt='profile icon' />
            <span>Profile</span>
          </a>
        </li>
      </ul>

      <button>LOG OUT</button>
    </div>
  );
};

export default Sidebar;
