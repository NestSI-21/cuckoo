import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import CuckooForm from '../../components/CuckooForm';
import CircularButton from '../../elements/CircularButton';
import { contentContainer } from './create.module.scss';

const Create = () => {
  return (
    <Layout hideSidebar>
      <div className={contentContainer}>
        <Link to='/Dashboard'>
          <CircularButton close />
        </Link>
        <h1>Create a Cuckoo!</h1>
        <p>Select the type of cuckoo you want to create</p>
        <CuckooForm />
      </div>
    </Layout>
  );
};

export default Create;
