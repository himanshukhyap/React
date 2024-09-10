// src/Firebase/GoogleLogin.js
import React from 'react';
import useAuth from './useAuth';

function GoogleLogin() {
  const { googleSignIn } = useAuth(); 

  return (
    <div className="login-container text-center">
      <h2>Sign in with Google</h2>
      <button className="btn btn-primary" onClick={googleSignIn}>
        Google Login
      </button>
    </div>
  );
}

export default GoogleLogin;
