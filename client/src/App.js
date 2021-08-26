import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Toast from './elements/Toast';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './screens/Landing';
import Dashboard from './screens/Dashboard';
import Cuckoos from './screens/Cuckoos';
import Companies from './screens/Companies';
import Profile from './screens/Profile';
import ProfileEdit from './screens/ProfileEdit';
import Create from './screens/Create';
import PageNotFound from './screens/PageNotFound';
import './styles/base.scss';

function App() {
  AOS.init();
  return (
    <>
      <Toast />
      <Router>
        <Switch>
          <Route path='/' component={Landing} exact />
          <ProtectedRoute path='/dashboard' component={Dashboard} exact />
          <ProtectedRoute path='/cuckoos' component={Cuckoos} exact />
          <ProtectedRoute path='/companies' component={Companies} exact />
          <ProtectedRoute path='/profile' component={Profile} exact />
          <ProtectedRoute path='/profile/edit' component={ProfileEdit} exact />
          <ProtectedRoute path='/create' component={Create} exact />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
