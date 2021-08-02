import React, { useState } from 'react';
import Layout from '../../components/Layout';
import SearchBar from '../../elements/SearchBar';
import FilterBtn from '../../elements/FilterBtn';
import CuckooList from '../../components/CuckooList';
import { contentContainer, filterContainer, filters } from './cuckoos.module.scss';

const Cuckoos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Layout pageTitle='Cuckoos'>
      <div className={contentContainer}>
        <div className={filterContainer}>
          <SearchBar setSearchTerm={setSearchTerm} />
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
        </div>
        <CuckooList searchTerm={searchTerm} />
      </div>
    </Layout>
  );
};

export default Cuckoos;
