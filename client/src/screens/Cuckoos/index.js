import React from 'react';
import Layout from '../../components/Layout';
import FilterBtn from '../../elements/FilterBtn';
import CuckooList from '../../components/CuckooList';
import { contentContainer, filters } from './cuckoos.module.scss';

const Cuckoos = () => {
  return (
    <Layout pageTitle='Cuckoos'>
      <div className={contentContainer}>
        <div className={filters}>
          <h3>Type:</h3>
          <FilterBtn text='Event' />
          <FilterBtn text='Announcement' />
          <h3>Category:</h3>
          <FilterBtn text='Alert' />
          <FilterBtn text='Education' />
          <FilterBtn text='New Company' />
          <FilterBtn text='New Employee' />
          <FilterBtn text='Social' />
          <FilterBtn text='Other' />
        </div>
        <CuckooList />
      </div>
    </Layout>
  );
};

export default Cuckoos;
