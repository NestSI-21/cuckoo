import React from 'react';
import Layout from '../../components/Layout';
import {
  content,
  profileSection,
  profilePhoto,
  linkOne,
  annotation,
  linkTwo,
} from './profile.module.scss';

const Profile = () => {
  return (
    <Layout pageTitle='Profile'>
      <div className={content}>
        <div className={profileSection}>
          <div className={profilePhoto}></div>
          <h3>UserName</h3>
          <a className={linkOne}>Edit Profile</a>
          <br></br>
          <br></br>
          <p className={annotation}>Role</p>
          <p>Software Engineer</p>
          <hr></hr>
          <p className={annotation}>Company</p>
          <p>RedLight</p>
          <hr></hr>
          <p className={annotation}>Birthday</p>
          <p>07/03/1988</p>
          <a className={linkTwo}>Log out</a>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
