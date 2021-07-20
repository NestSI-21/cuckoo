import React from 'react';
import { dashboard, card } from './dashboard.module.scss';
import CreateBtn from '../../elements/CreateBtn';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <Header />
      <CreateBtn />
      <div className={dashboard}>
        <div className={card}>
          <h3>Cuckoo Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi elementum in tellus, vel
            facilisis vel. Eu adipiscing quis diam, leo, lacus. Hendrerit purus nunc vitae, nulla
            odio. Quam vitae consequat nullam accumsan eu mollis sollicitudin tortor sit.
          </p>
          <p className='annotations'>@johnsmith, RedLight · 14 jul</p>
        </div>

        <div className={card}></div>
      </div>
    </div>
  );
};

export default Dashboard;
