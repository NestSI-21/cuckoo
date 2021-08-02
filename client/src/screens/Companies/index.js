import React, { useState } from 'react';
import CompaniesList from '../../components/CompaniesList';
import Layout from '../../components/Layout';
import SearchBar from '../../elements/SearchBar';
import { contentContainer, searchbar } from './companies.module.scss';

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Layout pageTitle='Companies' hideCreateBtn>
      <div className={contentContainer}>
        <div className={searchbar}>
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
        <CompaniesList searchTerm={searchTerm} />
      </div>
    </Layout>
  );
};

export default Companies;
