import React from 'react';
import Layout from '../../components/Layout';
import Button from '../../elements/Button';
import { Link } from 'react-router-dom';
import { content, logo } from './landing.module.scss';
import horizontalLogo from '../../assets/logos/logo-white.svg';
import slackIcon from '../../assets/icons/slack.svg';

const Landing = () => {
  return (
    <Layout hideHeaderSidebar>
      <div className={content}>
        <div>
          <img src={horizontalLogo} alt='Cuckoo horizontal logo' className={logo} />
          <h1>Welcome to Cuckoo</h1>
          <Link to='/Dashboard'>
            <Button text={'Sign in with Slack'} img={slackIcon} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
