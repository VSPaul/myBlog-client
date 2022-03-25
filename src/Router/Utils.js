import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Redirect to the login page if the user is not logged in and goes to a NonPrivateRoute
export const PrivateRoute = memo(function PrivateRoute({ children, ...rest }) {
  const isAuthentificated = useSelector(({ auth }) => auth.isAuthentificated);
  // console.log('AUTH UTILS', isAuthentificated)

  return (
    <Route
      {...rest}
      render={() => {
        if (!isAuthentificated) {
          return <Redirect to="/" />;
        }

        return children;
      }}
    />
  );
});

export const NonPrivateRoute = memo(function NonPrivateRoute({
  children,
  ...rest
}) {
  const isAuthentificated = useSelector(({ auth }) => auth.isAuthentificated);
  // console.log('AUTH UTILS', isAuthentificated)
  return (
    <Route
      {...rest}
      render={() => {
        if (isAuthentificated) {
          return <Redirect to="/dashboard" />;
        }
        return children;
      }}
    />
  );
});

export const RedirectToSignIn = memo(function NonPrivateRoute({
  children,
  ...rest
}) {
  const isRegistered = useSelector(({ auth }) => auth.isRegistered);
// console.log('isRegistered', isRegistered)
  return (
    <Route
      {...rest}
      render={() => {
        if (isRegistered) {
          return <Redirect to="/login" />;
        } 
        return children;
      }}
    />
  );
});

