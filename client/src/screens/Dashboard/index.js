import React from 'react';
import Layout from '../../components/Layout';
import CuckooList from '../../components/CuckooList';
import CuckooCarousel from '../../components/CuckooCarousel';
import Calendar from '../../components/Calendar';
import { contentContainer, cuckooList, carousel } from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <Layout pageTitle='Dashboard'>
      <div className={contentContainer}>
        <div className={cuckooList}>
          <CuckooList />
        </div>
        <div className={carousel}>
          <CuckooCarousel />
        </div>
        <Calendar />
      </div>
    </Layout>
  );
};

export default Dashboard;
