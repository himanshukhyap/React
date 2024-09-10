// src/Firebase/PublicRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStatus from './useAuthStatus';

const PublicRoute = ({children}) => {
    const location = useLocation();
 
    const { isLoggedIn } = useAuthStatus(); // Use the updated hook
    const redirectTo = location.state?.from || '/chat';
    return !isLoggedIn ? children : <Navigate to={redirectTo} replace />;

};

export default PublicRoute;
