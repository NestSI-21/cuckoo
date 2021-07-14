import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import SignIn from './screens/Signin';
import News from './screens/News';
import Companies from './screens/Companies';
import Profile from './screens/Profile';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Cuckoo</h1>
      </div>
      <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/signin' component={SignIn} exact />
        <Route path='/news' component={News} />
        <Route path='/companies' component={Companies} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
