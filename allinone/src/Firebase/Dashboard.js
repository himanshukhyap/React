// src/Dashboard.js
import React from 'react';
import useAuthStatus from './useAuthStatus';
import useAuth from './useAuth';

function Dashboard() {
  const { Auth_singout } = useAuth(); // Destructure the logout function
  const { isLoggedIn, loading } = useAuthStatus(); // Check user login status

  if (loading) return <p>Loading...</p>; // Show loading state

  if (!isLoggedIn) return null; // Prevent render until authentication is confirmed

  return (
    <div className="dashboard-container text-center">
      <h1>Welcome to the Dashboard</h1>
      <button className="btn btn-secondary" onClick={()=>Auth_singout()}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
