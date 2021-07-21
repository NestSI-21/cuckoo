import React from 'react';
import Layout from '../../components/Layout';
import { landing } from './landing.module.scss';
import horizontalLogo from '../../assets/logos/logo.svg';
import slackIcon from '../../assets/icons/slack.svg';

const Landing = () => {
  return (
    <Layout hideHeaderSidebar>
      <div className={landing}>
        <img src={horizontalLogo} alt='Cuckoo horizontal logo' />
        <h1>Welcome to Cuckoo</h1>
        <button className='button'>
          <img src={slackIcon} alt='Slack·Icon' />
          Sign in with Slack
        </button>
      </div>
    </Layout>
  );
};

export default Landing;
