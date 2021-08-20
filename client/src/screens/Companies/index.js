import React from 'react';
import CompaniesList from '../../components/CompaniesList';
import Layout from '../../components/Layout';
// import SearchBar from '../../elements/SearchBar';
import { contentContainer } from './companies.module.scss';

const Companies = () => {
  return (
    <Layout pageTitle='Companies' hideCreateBtn>
      <div className={contentContainer}>
        {/* TODO: Add search bar, see Cuckoos.js for functionality
        <div className={searchbar}>
          <SearchBar />
        </div> */}
        <CompaniesList searchTerm={searchTerm} />
      </div>
    </Layout>
  );
};

export default Companies;
