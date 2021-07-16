import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './screens/Landing';
import SignIn from './screens/SignIn';
import Dashboard from './screens/Dashboard';
import Cuckoos from './screens/Cuckoos';
import Companies from './screens/Companies';
import Profile from './screens/Profile';
import React from 'react';

  return (
    <Router>
      <div className='App'>
        <h1>Cuckoo</h1>
      </div>
      <Switch>
        <Route path='/' component={Landing} exact />
        <Route path='/signin' component={SignIn} exact />
        <Route path='/dashboard' component={Dashboard} exact />
        <Route path='/cuckoos' component={Cuckoos} />
        <Route path='/companies' component={Companies} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  );

export default App;
