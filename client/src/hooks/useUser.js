import React, { useContext, useState, useMemo } from 'react';
import axios from 'axios';

const UserContext = React.createContext();

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('Clients of useUserContext must be wrapped inside a <UserContextProvider />');
  }

  return context;
};

export const UserContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [profileComplete, setProfileComplete] = useState(true);

  const login = (slackCode) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/slack/login`, { code: slackCode })
      .then((resp) => {
        localStorage.setItem('token', resp.headers.authorization);
        const userProfileStatus = resp.data.user.profile_completed;
        setProfileComplete(userProfileStatus);
        setIsLoggedIn(true);
      });
  };

  const context = useMemo(
    () => ({
      login,
      isLoggedIn,
      profileComplete,
      setProfileComplete,
    }),
    [isLoggedIn, profileComplete],
  );

  return <UserContext.Provider value={context} {...props} />;
};
