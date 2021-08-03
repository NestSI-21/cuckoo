import React from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Avatar from '../../elements/Avatar';
import { contentContainer, edit, logout, profileSection } from './profile.module.scss';

const Profile = () => {
  var user = localStorage.getItem('data');
  user = JSON.parse(user);
  console.log(user);
  const handleClick = (event) => {
    event.preventDefault();
    const headers = {
      authorization: localStorage.getItem('token'),
    };
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/users/sign_out`, {
        headers: headers,
      })
      .then((resp) => {
        console.log(resp);
        if (resp.status === 200) {
          localStorage.clear();
          window.location.href = '/';
        }
      });
  };

  return (
    <Layout pageTitle='Profile' hideCreateBtn>
      <div className={contentContainer}>
        <Avatar userImage={user.image_url} />
        <h3>{user.name}</h3>
        <a href='/signin' className={edit}>
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
          <p>RedLight</p>
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
