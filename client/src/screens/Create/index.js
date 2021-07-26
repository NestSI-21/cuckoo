import React from 'react';
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';
import CuckooForm from '../../components/CuckooForm';
import CloseBtn from '../../elements/CloseBtn';
import { content } from './create.module.scss';

const Create = () => {
  return (
    <Layout hideHeaderSidebar>
      <Link to='/Dashboard'>
        <CloseBtn />
      </Link>
      <div className={content}>
        <h1>Create a Cuckoo!</h1>
        <CuckooForm />
      </div>
    </Layout>
  );
};

export default Create;
