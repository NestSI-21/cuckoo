import React from 'react';
import Layout from '../../components/Layout';
import ProfileForm from '../../components/ProfileForm';
import { contentContainer } from './profileedit.module.scss';

const ProfileEdit = () => {
  return (
    <Layout hideSidebar>
      <div className={contentContainer}>
        <ProfileForm />
      </div>
    </Layout>
  );
};

export default ProfileEdit;
