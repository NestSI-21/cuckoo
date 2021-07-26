import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './screens/Landing';
import SignIn from './screens/SignIn';
import Dashboard from './screens/Dashboard';
import Cuckoos from './screens/Cuckoos';
import Companies from './screens/Companies';
import Profile from './screens/Profile';
import PageNotFound from './screens/PageNotFound';
import './styles/base.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Landing} exact />
        <Route path='/signin' component={SignIn} exact />
        <Route path='/dashboard' component={Dashboard} exact />
        <Route path='/cuckoos' component={Cuckoos} exact />
        <Route path='/companies' component={Companies} exact />
        <Route path='/profile' component={Profile} exact />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
