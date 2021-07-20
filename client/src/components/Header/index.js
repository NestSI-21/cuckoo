import React from 'react';
import CreateBtn from '../../elements/CreateBtn';
import { header } from './header.module.scss';

const Header = () => {
  return (
    <div className={header}>
      <CreateBtn />
      <h1>Page Name</h1>
    </div>
  );
};

export default Header;
