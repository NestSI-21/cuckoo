import React from 'react';
import Layout from '../../components/Layout';
import { content, logo } from './landing.module.scss';
import horizontalLogo from '../../assets/logos/logo-white.svg';
import SlackLogin from 'react-slack-login';
import axios from 'axios';

const Landing = () => {
  const onFailed = (error) => {
    console.log(error);
  };

  const onSuccess = (slackCode) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/slack/login`, { code: slackCode })
      .then((resp) => console.log(resp));
    console.log(slackCode);
  };

  return (
    <Layout hideHeaderSidebar>
      <div className={content}>
        <div>
          <img src={horizontalLogo} alt='Cuckoo horizontal logo' className={logo} />
          <h1>Welcome to Cuckoo</h1>
          <SlackLogin
            redirectUrl={process.env.REACT_APP_SLACK_REDIRECT_URL}
            onFailure={onFailed}
            onSuccess={onSuccess}
            slackClientId={process.env.REACT_APP_SLACK_CLIENT_ID}
            slackUserScope='team:read,users:read,identify,users.profile:read'
          />
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
