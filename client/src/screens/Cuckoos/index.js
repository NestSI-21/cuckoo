import React from 'react';
import { cuckoosMain, filters } from './cuckoos.module.scss';
import CuckooList from '../../components/CuckooList';

const Cuckoos = () => {
  return (
    <div className={cuckoosMain}>
      <div className={filters}>
        <h3>Filters</h3>
      </div>
      <CuckooList />
    </div>
  );
};

export default Cuckoos;
