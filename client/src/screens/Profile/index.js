import React from 'react';
import Layout from '../../components/Layout';
import Avatar from '../../elements/Avatar';
import { get } from '../../helpers/Networking';
import { contentContainer, edit, logout, profileSection } from './profile.module.scss';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('data'));
  const companyName = JSON.parse(localStorage.getItem('companyName'));

  const handleClick = (e) => {
    e.preventDefault();

    get('/users/sign_out', function (resp) {
      if (resp.status === 200) {
        localStorage.clear();
        window.location.href = '/';
      }
    });
  };

  return (
    <Layout pageTitle='Profile' hideHeader hideCreateBtn>
      <div className={contentContainer}>
        <Avatar userImage={user.image_url} />
        <h3>{user.name}</h3>
        <a href='/profile/edit' className={edit}>
          Edit Profile
        </a>
        <div className={profileSection}>
          <p>
            <span>Role</span>
          </p>
          <p>{user.company_role}</p>
        </div>
        <div className={profileSection}>
          <p>
            <span>Company</span>
          </p>
          <p>{companyName}</p>
        </div>
        <div className={profileSection}>
          <p>
            <span>Date of Birth</span>
          </p>
          <p>{user.birthday}</p>
        </div>
        <a href='#' className={logout} onClick={handleClick}>
          Log out
        </a>
      </div>
    </Layout>
  );
};

export default Profile;
