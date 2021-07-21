import React from 'react';
import CuckooList from '../../components/CuckooList';
import Layout from '../../components/Layout';
import { cuckoosMain, filters } from './cuckoos.module.scss';

const Cuckoos = () => {
  return (
    <Layout pageTitle='Cuckoos'>
      <div className={cuckoosMain}>
        <div className={filters}>
          <h3>Filters</h3>
        </div>
        <CuckooList />
      </div>
    </Layout>
  );
};

export default Cuckoos;
