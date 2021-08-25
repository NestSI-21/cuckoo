import React from 'react';
import { Redirect } from 'react-router';
import SlackLogin from 'react-slack-login';
import animatedLogo from '../../assets/logos/cuckooAnimation.svg';
import Layout from '../../components/Layout';
import { useUserContext } from '../../hooks/useUser';
import { content, logo } from './landing.module.scss';

const Landing = () => {
  const { login, isLoggedIn, profileComplete } = useUserContext();

  const onFailed = (error) => {
    console.log(process.env.REACT_APP_API_BASE_URL);
    console.log(error);
  };

  if (isLoggedIn && profileComplete) {
    return <Redirect to='/dashboard' />;
  }

  if (isLoggedIn && !profileComplete) {
    return <Redirect to='/profile/edit' />;
  }

  return (
    <Layout hideSidebar>
      <div className={content}>
        <object type='image/svg+xml' data={animatedLogo} className={logo}>
          svg-animation
        </object>
        <h1>Welcome to Cuckoo</h1>
        <SlackLogin
          redirectUrl={`${window.location.origin}/api/v1/auth/slack`}
          onFailure={onFailed}
          onSuccess={login}
          slackClientId={process.env.REACT_APP_SLACK_CLIENT_ID}
          slackUserScope='team:read,users:read,identify,users.profile:read,chat:write'
        />
      </div>
    </Layout>
  );
};
export default Landing;
