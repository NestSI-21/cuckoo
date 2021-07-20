import React from 'react';
import { dashboardMain, calendar } from './dashboard.module.scss';
import CuckooList from '../../components/CuckooList';

const Dashboard = () => {
  return (
    <div className={dashboardMain}>
      <CuckooList />
      <div className={calendar}>
        <h3>Upcoming Events</h3>
      </div>
    </div>
  );
};

export default Dashboard;
