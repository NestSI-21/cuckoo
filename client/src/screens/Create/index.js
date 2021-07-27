import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import CuckooForm from '../../components/CuckooForm';
import CircularButton from '../../elements/CircularButton';
import { content } from './create.module.scss';

const Create = () => {
  return (
    <Layout hideSidebar>
      <div className={content}>
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
