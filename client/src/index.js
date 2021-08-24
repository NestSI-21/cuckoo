import ReactDOM from 'react-dom';
import App from './App';

import { UserContextProvider } from './hooks/useUser';

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('root'),
);
