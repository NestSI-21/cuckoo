import React from 'react';
//import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import ProfileForm from '../../components/ProfileForm';
import { contentContainer } from './profileedit.module.scss';

const ProfileEdit = () => {
  // const user = JSON.parse(localStorage.getItem('data'));

  // useEffect(() => {
  //   if (user.profile_completed) {
  //     console.log('hello');
  //     setData((prevData) => ({
  //       ...prevData,
  //       company: user.company_id,
  //       role: user.company_role,
  //       birthday: user.birthday,
  //     }));
  //   }
  // }, []);

  return (
    <Layout hideSidebar>
      <div className={contentContainer}>
        <ProfileForm />
      </div>
    </Layout>
  );
};

export default ProfileEdit;
