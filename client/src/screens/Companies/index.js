import React from 'react';
import CompaniesList from '../../components/CompaniesList';
import Layout from '../../components/Layout';

const Companies = () => {
  return (
    <Layout pageTitle='Companies'>
      <div>
        <CompaniesList />
      </div>
    </Layout>
  );
};

export default Companies;
