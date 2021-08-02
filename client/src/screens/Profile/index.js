import React from 'react';
import Layout from '../../components/Layout';
import Avatar from '../../elements/Avatar';
import dog from '../../assets/icons/dog.jpeg';
import { contentContainer, edit, logout, profileSection } from './profile.module.scss';

const Profile = () => {
  return (
    <Layout pageTitle='Profile' hideCreateBtn>
      <div className={contentContainer}>
        <Avatar userImage={dog} />
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
