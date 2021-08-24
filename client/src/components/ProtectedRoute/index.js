import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useUserContext } from '../../hooks/useUser';

const ProtectedRoute = ({ path, component, exact }) => {
  const Screen = component;
  const { isLoggedIn } = useUserContext();
  return (
    <Route
      exact={exact}
      path={path}
      component={(props) => {
        if (isLoggedIn) {
          return <Screen {...props} />;
        } else {
          return <Redirect to='/' />;
        }
      }}
    />
  );
};

ProtectedRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.any,
  exact: PropTypes.bool,
};

export default ProtectedRoute;
