import React from 'react';
import CompaniesList from '../../components/CompaniesList';
import Layout from '../../components/Layout';
import { contentContainer } from './companies.module.scss';

const Companies = () => {
  return (
    <Layout pageTitle='Companies' hideCreateBtn>
      <div className={contentContainer}>
        <CompaniesList />
      </div>
    </Layout>
  );
};

export default Companies;
