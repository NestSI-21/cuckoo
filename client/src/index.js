import ReactDOM from 'react-dom';
import App from './App';
import HttpsRedirect from 'react-https-redirect';
import { UserContextProvider } from './hooks/useUser';

ReactDOM.render(
  <HttpsRedirect>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </HttpsRedirect>,
  document.getElementById('root'),
);
