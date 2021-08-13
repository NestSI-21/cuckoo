import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import denormalize from '@weareredlight/denormalize_json_api';
import { get } from '../../helpers/Networking';
import Layout from '../../components/Layout';
import Avatar from '../../elements/Avatar';
import { contentContainer, edit, logout, profileSection } from './profile.module.scss';

const Profile = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    get('/users/profiles', function (resp) {
      const user = denormalize(resp.data).data;
      setUser(user);
    });
  };

  const handleSignOutClick = (e) => {
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
        {user && (
          <>
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
              <p>{user.company.name}</p>
            </div>
            <div className={profileSection}>
              <p>
                <span>Date of Birth</span>
              </p>
              <p>{format(new Date(user.birthday), 'dd-MM-yyyy')}</p>
            </div>
            <a href='#' className={logout} onClick={handleSignOutClick}>
              Log out
            </a>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
