import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsLoggedIn } from 'redux/selectors'


const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return !isLoggedIn ? <Navigate to={redirectTo} /> : <Component/>
}

export default PrivateRoute
