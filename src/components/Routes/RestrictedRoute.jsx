import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

const RestrictedRoute = ( {component:Component, redirectTo ="/"}) => {
      const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? <Component/> : <Navigate to={redirectTo} />
}

export default RestrictedRoute
