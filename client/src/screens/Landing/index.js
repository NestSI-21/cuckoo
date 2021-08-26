import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router';
import axios from 'axios';
import SlackLogin from 'react-slack-login';
import animatedLogo from '../../assets/logos/cuckooAnimation.svg';
import laptop from '../../assets/landing/laptop.png';
import mobile from '../../assets/landing/mobile.png';
import cuckooIcon from '../../assets/logos/logo-icon.svg';
import arrows from '../../assets/landing/arrows.svg';
import githubIcon from '../../assets/landing/github.svg';
import doubleMobile from '../../assets/landing/doublemobile.png';
import devices from '../../assets/landing/devices.png';
import mobileGetStarted from '../../assets/landing/mobilegetstarted.png';
import createCuckoo from '../../assets/landing/createcuckoo.png';
import {
  content,
  headerFirst,
  headerSecond,
  menu,
  logo,
  login,
  intro,
  introContainer,
  introMessage,
  about,
  aboutMessage,
  setup,
  setupMessage,
  setupIcons,
  how,
  howMessage,
  allDevices,
  getStarted,
  getStartedMessage,
  steps,
  step,
  create,
  createMessage,
  demo,
} from './landing.module.scss';

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
        const userProfileStatus = resp.data.user.profile_completed;
        if (userProfileStatus) {
          history.push('/dashboard');
        } else {
          history.push('/profile/edit');
        }
      });
  };

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      if (scrollTop >= 300) {
        setScrolling(e.target.documentElement.scrollTop > scrollTop);
      }
    };
    window.addEventListener('scroll', onScroll);
  }, [scrollTop]);

  if (localStorage.getItem('token') !== null) {
    return <Redirect to='/dashboard' />;
  } else {
    return (
      <>
        <div className={content}>
          <header className={!scrolling ? headerFirst : headerSecond}>
            <nav>
              <a
                className={logo}
                href='https://www.nestcollective.co/'
                target='_blank'
                rel='noreferrer'
              ></a>
              <ul>
                <div className={menu}>
                  <a href='/#intro'>
                    <li>Home</li>
                  </a>
                  <a href='/#about'>
                    <li>About</li>
                  </a>
                  <a href='/#setup'>
                    <li>Setup</li>
                  </a>
                  <a href='/#how'>
                    <li>How it works</li>
                  </a>
                </div>
                <div className={login}>
                  <SlackLogin
                    redirectUrl={process.env.REACT_APP_SLACK_REDIRECT_URL}
                    onFailure={onFailed}
                    onSuccess={onSuccess}
                    slackClientId={process.env.REACT_APP_SLACK_CLIENT_ID}
                    slackUserScope='team:read,users:read,identify,users.profile:read,chat:write'
                  />
                  <p>for NEST Collective workers</p>
                </div>
              </ul>
            </nav>
          </header>
          <main>
            <section className={intro} id='intro'>
              <div className={introContainer}>
                <img src={laptop} alt='laptop' />
                <div className={introMessage}>
                  <object type='image/svg+xml' data={animatedLogo}>
                    svg-animation
                  </object>
                  <h3>Store and organize slack posts</h3>
                </div>
              </div>
            </section>

            <section className={about} id='about'>
              <div className={aboutMessage}>
                <h3>Welcome to Cuckoo</h3>
                <p>
                  Cuckoo is a <span>open source product</span> directed to companies and work teams
                  that uses Slack to communicate. It focuses on <span>storing</span> your important
                  <span>Slack Posts</span>
                  in one place so that you don’t miss a thing.
                </p>
              </div>
              <img
                src={mobile}
                alt='mobile'
                data-aos='fade-up'
                data-aos-offset='200'
                data-aos-delay='150'
              />
            </section>

            <section
              className={setup}
              id='setup'
              data-aos='fade-in'
              data-aos-offset='200'
              data-aos-delay='100'
            >
              <div className={setupMessage}>
                <h3>Setup your Cuckoo</h3>
                <p>
                  Go to our GitHub repository to setup Cuckoo in your organization Slack workspace
                </p>
              </div>
              <div className={setupIcons}>
                <img src={cuckooIcon} alt='Cuckoo icon' />
                <img src={arrows} alt='arrows' />
                <img src={githubIcon} alt='GitHub icon' />
              </div>
              <a href='https://github.com/NestSI-21/cuckoo' target='_blank' rel='noreferrer'>
                <i className='fab fa-git-alt'></i>
                <p>Cuckoo GitHub repository</p>
              </a>
            </section>

            <section className={allDevices}>
              <img
                src={devices}
                alt='all devices'
                data-aos='fade-up'
                data-aos-offset='200'
                data-aos-delay='50'
              />
              <p>
                Cuckoo is a platform that can be used through your desktop computer, phone, or any
                other device.
              </p>
            </section>

            <section className={how} id='how'>
              <img
                src={doubleMobile}
                alt='two mobiles'
                data-aos='fade-up'
                data-aos-offset='200'
                data-aos-delay='150'
              />
              <div className={howMessage}>
                <h3>How it works?</h3>
                <p>
                  With Cuckoo you can create <span>events</span> or <span>announcements</span> that
                  will be published on the platforms Cuckoos feed where you can find all the posts
                  previously published by other members of your organisation.
                </p>
                <p>
                  These posts will also be sent to a channel on your <span>slack workspace</span>,
                  depending on their category. A reminder will also be sent 1 day before the event
                  starts.
                </p>
                <p>
                  Events will go into a <span>collective calendar</span>. This way you will quickly
                  have access to what will be happening in the following days, so that you dont miss
                  a thing.
                </p>
              </div>
            </section>

            <section
              className={getStarted}
              data-aos='fade-in'
              data-aos-offset='300'
              data-aos-delay='100'
            >
              <div className={getStartedMessage}>
                <h3>Get Started!</h3>
                <p>
                  To use Cuckoo you will need to <span>sign in with slack</span> and fill some
                  required personal information (name of the company you work for and your job
                  title). You can even let your colleagues know when your birthday is, so that they
                  can be notified. This personal information can be change at any time.
                </p>
                <div className={steps}>
                  <div className={step}>
                    <h1>1.</h1>
                    <p>
                      Sign in <br />
                      with Slack
                    </p>
                  </div>
                  <div className={step}>
                    <h1>2.</h1>
                    <p>
                      Add your personal <br />
                      information
                    </p>
                  </div>
                  <div className={step}>
                    <h1>3.</h1>
                    <p>
                      Change your
                      <br /> data anytime
                    </p>
                  </div>
                </div>
              </div>
              <img src={mobileGetStarted} alt='get started on mobile' />
            </section>

            <section className={create}>
              <img
                src={createCuckoo}
                alt='creating a cuckoo'
                data-aos='fade-up'
                data-aos-offset='200'
                data-aos-delay='100'
              />
              <div className={createMessage}>
                <h3>How can you create a Cuckoo?</h3>
                <p>
                  To create a Cuckoo (Slack Post that will be stored in the platform) you will only
                  need to tell us that type of cuckoo you want o create, give it a title and a
                  category, all the other spaces are not required. Your Cuckoo will be{' '}
                  <span>send to Slack</span>
                  as well as <span>storage</span> in the platform.
                </p>
                <div className={steps}>
                  <div className={step}>
                    <h1>1.</h1>
                    <p>Type of a Cuckoo</p>
                  </div>
                  <div className={step}>
                    <h1>2.</h1>
                    <p>Give it a title</p>
                  </div>
                  <div className={step}>
                    <h1>3.</h1>
                    <p>Category of the Cuckoo</p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer>
            <div
              className={demo}
              data-aos='fade-in'
              data-aos-offset='200'
              data-aos-delay='50'
            ></div>
            <p>© 2021, Cuckoo. All rights reserved</p>
          </footer>
        </div>
      </>
    );
  }
};

export default Landing;
