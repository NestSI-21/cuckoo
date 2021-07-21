import logo from './logo.svg';
import './App.css';
import SlackLogin  from 'react-slack-login';
import axios from 'axios';

function App() {
  const onFailed = (error) => {
    console.log(error);
  }
  const onSuccess = (slackCode) =>{
    axios.post(`${process.env.REACT_APP_API_BASE_URL}/slack/login`, {code: slackCode}).then(resp => console.log(resp));
    console.log(slackCode)
  }
  return (
    <div className="App">
      <SlackLogin
        redirectUrl={process.env.REACT_APP_SLACK_REDIRECT_URL}
        onFailure={onFailed}
        onSuccess={onSuccess}
        slackClientId={process.env.REACT_APP_SLACK_CLIENT_ID}
        slackUserScope="team:read,users:read,identify,users.profile:read"
      />
      <header className="App-header">
    
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
      </header>
    </div>
  );
}

export default App;
