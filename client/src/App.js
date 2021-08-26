import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Landing from './screens/Landing';
import Dashboard from './screens/Dashboard';
import Cuckoos from './screens/Cuckoos';
import Companies from './screens/Companies';
import Profile from './screens/Profile';
import ProfileEdit from './screens/ProfileEdit';
import Create from './screens/Create';
import PageNotFound from './screens/PageNotFound';
import './styles/base.scss';
import Toast from './elements/Toast';

function App() {
  AOS.init();
  return (
    <>
      <Toast />
      <Router>
        <Switch>
          <Route path='/' component={Landing} exact />
          <Route path='/dashboard' component={Dashboard} exact />
          <Route path='/cuckoos' component={Cuckoos} exact />
          <Route path='/companies' component={Companies} exact />
          <Route path='/profile' component={Profile} exact />
          <Route path='/profile/edit' component={ProfileEdit} exact />
          <Route path='/create' component={Create} exact />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
