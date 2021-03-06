import React, { useState, useEffect } from 'react';
import denormalize from '@weareredlight/denormalize_json_api';
import apiConfig from '../../helpers/Networking';
import Layout from '../../components/Layout';
import CuckooList from '../../components/CuckooList';
import CuckooCarousel from '../../components/CuckooCarousel';
import Calendar from '../../components/Calendar';
import { contentContainer, cuckooList, carousel } from './dashboard.module.scss';

const Dashboard = () => {
  const [cuckoos, setCuckoos] = useState();

  useEffect(() => {
    getCuckoos();
  }, []);

  const getCuckoos = () => {
    apiConfig.get('/posts', function (resp) {
      const cuckoos = denormalize(resp.data).data;
      setCuckoos(cuckoos);
    });
  };

  return (
    <Layout pageTitle={`${process.env.REACT_APP_ORGANIZATION_NAME} Dashboard`}>
      <div className={contentContainer}>
        <div className={cuckooList}>
          <CuckooList cuckoos={cuckoos} />
        </div>
        <div className={carousel}>
          <CuckooCarousel cuckoos={cuckoos} />
        </div>
        <Calendar />
      </div>
    </Layout>
  );
};

export default Dashboard;
