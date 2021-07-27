import React from 'react';
import Layout from '../../components/Layout';
import {
  contentContainer,
  profilePhoto,
  edit,
  logout,
  profileSection,
} from './profile.module.scss';

const Profile = () => {
  return (
    <Layout pageTitle='Profile'>
      <div className={contentContainer}>
        <div className={profilePhoto}></div>
        <h3>UserName</h3>
        <a href='#' className={edit}>
          Edit Profile
        </a>
        <div className={profileSection}>
          <p>
            <span>Role</span>
          </p>
          <p>Software Engineer</p>
        </div>
        <div className={profileSection}>
          <p>
            <span>Company</span>
          </p>
          <p>RedLight</p>
        </div>
        <div className={profileSection}>
          <p>
            <span>Birthday</span>
          </p>
          <p>07/03/1988</p>
        </div>
        <a href='#' className={logout}>
          Log out
        </a>
      </div>
    </Layout>
  );
};

export default Profile;
