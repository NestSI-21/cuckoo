import React from 'react';
import CuckooList from '../../components/CuckooList';
import Layout from '../../components/Layout';
import { content, filters } from './cuckoos.module.scss';

const Cuckoos = () => {
  return (
    <Layout pageTitle='Cuckoos'>
      <div className={content}>
        <div className={filters}>
          <h3>Filters</h3>
        </div>
        <CuckooList />
      </div>
    </Layout>
  );
};

export default Cuckoos;
