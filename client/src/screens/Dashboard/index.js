import React from 'react';
import Layout from '../../components/Layout';
import CuckooList from '../../components/CuckooList';
import Calendar from '../../components/Calendar';
import { contentContainer } from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <Layout pageTitle='Dashboard'>
      <div className={contentContainer}>
        <CuckooList />
        <Calendar />
      </div>
    </Layout>
  );
};

export default Dashboard;
