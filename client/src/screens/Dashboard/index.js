import React, { useState } from 'react';
import Layout from '../../components/Layout';
import CuckooList from '../../components/CuckooList';
import Calendar from '../../components/Calendar';
import { contentContainer } from './dashboard.module.scss';

const Dashboard = () => {
  const [searchTerm] = useState('');
  return (
    <Layout pageTitle='Dashboard'>
      <div className={contentContainer}>
        <CuckooList searchTerm={searchTerm} />
        <Calendar />
      </div>
    </Layout>
  );
};

export default Dashboard;
