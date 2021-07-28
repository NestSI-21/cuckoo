import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import EditProfile from '../../components/EditProfile';
import Avatar from '../../elements/Avatar';
import dog from '../../assets/icons/dog.jpeg';
import CircularButton from '../../elements/CircularButton';
import { contentContainer } from './signin.module.scss';

const SignIn = () => {
  return (
    <Layout hideSidebar>
      <div className={contentContainer}>
        <Link to='/Dashboard'>
          <CircularButton close />
        </Link>
        <Avatar userImage={dog} />
        <h1>Almost there</h1>
        <EditProfile />
      </div>
    </Layout>
  );
};

export default SignIn;
