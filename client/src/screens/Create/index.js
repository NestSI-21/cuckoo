import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import CuckooForm from '../../components/CuckooForm';
import CircularButton from '../../elements/CircularButton';
import Toast from '../../elements/Toast';
import { contentContainer } from './create.module.scss';

const Create = () => {
  return (
    <Layout hideSidebar>
      <div className={contentContainer}>
        <Toast />
        <Link to='/Dashboard'>
          <CircularButton close />
        </Link>
        <h1>Create a Cuckoo!</h1>
        <CuckooForm />
      </div>
    </Layout>
  );
};

export default Create;
