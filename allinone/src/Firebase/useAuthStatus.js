// src/hooks/useAuthStatus.js
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        navigate('/'); // Redirect to login if not authenticated
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  return { isLoggedIn, loading };
};

export default useAuthStatus;


// Explanation:
// onAuthStateChanged: This Firebase function listens for changes in the user's authentication state.
// navigate('/login'): Redirects the user to the login page if not authenticated.
// State Management: isLoggedIn and loading states to track the authentication status and loading state.