import React from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Avatar from '../../elements/Avatar';
import dog from '../../assets/icons/dog.jpeg';
import { contentContainer, edit, logout, profileSection } from './profile.module.scss';

const Profile = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const headers = {
      authorization: localStorage.getItem('token'),
    };
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/users/logout`,
        {
          data: '',
        },
        {
          headers: headers,
        },
      )
      .then((resp) => {
        console.log(resp);
        if (resp.status === 200) {
          localStorage.clear();
          window.location.href = '/';
        }
      });
  };

  return (
    <Layout pageTitle='Profile'>
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
        <a href='#' className={logout} onClick={handleClick}>
          Log out
        </a>
      </div>
    </Layout>
  );
};

export default Profile;
