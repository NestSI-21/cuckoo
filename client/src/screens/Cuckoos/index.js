import React, { useState } from 'react';
import Layout from '../../components/Layout';
import SearchBar from '../../elements/SearchBar';
import FilterBtn from '../../elements/FilterBtn';
import Input from '../../elements/Input';
import CuckooList from '../../components/CuckooList';
import {
  contentContainer,
  filterContainer,
  search,
  filters,
  dateFilters,
  dateLabels,
  typeFilters,
  categoryFilters,
  cuckooList,
} from './cuckoos.module.scss';

const Cuckoos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const toggleOpenFilters = () => {
    setShowFilters(!showFilters);
  };
  const width = window.innerWidth;
  const breakpoint = 1024;

  return (
    <Layout pageTitle='Cuckoos'>
      <div className={contentContainer}>
        <div className={filterContainer}>
          <div className={search}>
            <SearchBar setSearchTerm={setSearchTerm} />
            <button onClick={toggleOpenFilters}>
              <i className='fas fa-sliders-h'></i>
            </button>
          </div>
          {showFilters || width > breakpoint ? (
            <div className={filters}>
              <div>
                <div className={dateFilters}>
                  <h3>Date:</h3>
                  <div className={dateLabels}>
                    <Input type='date' name='startDate' label='From:' />
                    <Input type='date' name='endDate' label='To:' />
                  </div>
                </div>
                <div className={typeFilters}>
                  <h3>Type:</h3>
                  <FilterBtn text='Event' />
                  <FilterBtn text='Announcement' />
                </div>
              </div>
              <div className={categoryFilters}>
                <h3>Category:</h3>
                <FilterBtn text='Alert' />
                <FilterBtn text='Education' />
                <FilterBtn text='New Company' />
                <FilterBtn text='New Employee' />
                <FilterBtn text='Social' />
                <FilterBtn text='Other' />
              </div>
            </div>
          ) : null}
        </div>
        <div className={cuckooList}>
          <CuckooList searchTerm={searchTerm} />
        </div>
      </div>
    </Layout>
  );
};

export default Cuckoos;
