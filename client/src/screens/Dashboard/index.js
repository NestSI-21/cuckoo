import React, { useState, useEffect } from 'react';
import denormalize from '@weareredlight/denormalize_json_api';
import { get } from '../../helpers/Networking';
import Layout from '../../components/Layout';
import CuckooList from '../../components/CuckooList';
import CuckooCarousel from '../../components/CuckooCarousel';
import Calendar from '../../components/Calendar';
import { contentContainer } from './dashboard.module.scss';

const Dashboard = () => {
  const [cuckoos, setCuckoos] = useState();
  const width = window.innerWidth;
  const breakpoint = 501;

  useEffect(() => {
    getCuckoos();
  }, []);

  const getCuckoos = () => {
    get('/posts', function (resp) {
      const cuckoos = denormalize(resp.data).data;
      setCuckoos(cuckoos);
    });
  };

  return (
    <Layout pageTitle='Dashboard'>
      <div className={contentContainer}>
        {width < breakpoint ? (
          <CuckooCarousel cuckoos={cuckoos} />
        ) : (
          <CuckooList cuckoos={cuckoos} />
        )}
        <Calendar />
      </div>
    </Layout>
  );
};

export default Dashboard;
