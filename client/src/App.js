import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/applications.scss';
import Landing from './screens/Landing';
import SignIn from './screens/SignIn';
import Dashboard from './screens/Dashboard';
import Cuckoos from './screens/Cuckoos';
import Companies from './screens/Companies';
import Profile from './screens/Profile';

function App() {
  return (
    <Router>
      <div className='App'></div>
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
}

export default App;
