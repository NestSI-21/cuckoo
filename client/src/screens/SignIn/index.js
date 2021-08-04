import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import EditProfile from '../../components/EditProfile';
import Avatar from '../../elements/Avatar';
import CircularButton from '../../elements/CircularButton';
import { contentContainer } from './signin.module.scss';

const SignIn = () => {
  var user = localStorage.getItem('data');
  user = JSON.parse(user);
  return (
    <Layout hideSidebar>
      <div className={contentContainer}>
        <Link to='/Dashboard'>
          <CircularButton close />
        </Link>
        <Avatar userImage={user.image_url} />
        <h1>Almost there</h1>
        <EditProfile />
      </div>
    </Layout>
  );
};

export default SignIn;
