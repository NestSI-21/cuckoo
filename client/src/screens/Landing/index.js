import React from 'react';
import axios from 'axios';
import SlackLogin from 'react-slack-login';
import Layout from '../../components/Layout';
import animatedLogo from '../../assets/logos/cuckooAnimation.svg';
import { content, logo } from './landing.module.scss';
import { useHistory } from 'react-router-dom';

const Landing = () => {
  let history = useHistory();
  const onFailed = (error) => {
    console.log(error);
  };

  const onSuccess = (slackCode) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/slack/login`, { code: slackCode })
      .then((resp) => {
        localStorage.setItem('token', resp.headers.authorization);
        localStorage.setItem('data', JSON.stringify(resp.data.user));
        console.log(resp);
        // history.push('/signin');
        if (resp.data.user.profile_completed) {
          history.push('/dashboard');
        } else {
          history.push('/profile/edit');
        }
      });
  };

  return (
    <Layout hideSidebar>
      <div className={content}>
        <object type='image/svg+xml' data={animatedLogo} className={logo}>
          svg-animation
        </object>
        <h1>Welcome to Cuckoo</h1>
        <SlackLogin
          redirectUrl={process.env.REACT_APP_SLACK_REDIRECT_URL}
          onFailure={onFailed}
          onSuccess={onSuccess}
          slackClientId={process.env.REACT_APP_SLACK_CLIENT_ID}
          slackUserScope='team:read,users:read,identify,users.profile:read,chat:write'
        />
      </div>
    </Layout>
  );
};

export default Landing;
