import React from 'react';
import horizontalLogo from '../../assets/logos/logo-horizontal.png';
import { sidebar } from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={sidebar}>
      <img src={horizontalLogo} alt='Cuckoo horizontal logo' />
    </div>
  );
};

export default Sidebar;
