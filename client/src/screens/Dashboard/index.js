import React from 'react';
import Layout from '../../components/Layout';
import CuckooList from '../../components/CuckooList';
import { contentContainer, calendar } from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <Layout pageTitle='Dashboard'>
      <div className={contentContainer}>
        <CuckooList />
        <div className={calendar}>
          <h3>Upcoming Events</h3>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
