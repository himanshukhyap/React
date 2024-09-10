// src/Firebase/ProtectedRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthStatus from './useAuthStatus';

const ProtectedRoute = ({ children }) => {
  const location = useLocation(); // Get the current location
  const { isLoggedIn, loading } = useAuthStatus(); // Use the updated hook

  if (loading) {
    return <div>Loading...</div>; // Show a loading message while checking authentication
  }

  // If the user is not logged in, redirect to the login page
  return isLoggedIn ? children : <Navigate to="/" state={{ from: location }} replace />;
};

export default ProtectedRoute;
