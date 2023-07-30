import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/selectors';

const RestrictedRoute = ( {component:Component, redirectTo ="/"}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing)
  const isRedirect = !isLoggedIn && !isRefreshing;
  return isRedirect ? <Component /> : <Navigate to={redirectTo} />;
}

export default RestrictedRoute
