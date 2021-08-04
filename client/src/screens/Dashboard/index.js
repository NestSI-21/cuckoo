import React from 'react';
import Layout from '../../components/Layout';
import CuckooList from '../../components/CuckooList';
import CuckooCarousel from '../../components/CuckooCarousel';
import Calendar from '../../components/Calendar';
import { contentContainer } from './dashboard.module.scss';

const Dashboard = () => {
  const width = window.innerWidth;
  const breakpoint = 501;

  return (
    <Layout pageTitle='Dashboard'>
      <div className={contentContainer}>
        {width < breakpoint ? <CuckooCarousel /> : <CuckooList />}
        <Calendar />
      </div>
    </Layout>
  );
};

export default Dashboard;
