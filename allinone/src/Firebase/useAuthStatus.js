// src/hooks/useAuthStatus.js
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './FirebaseConfig';
import { useNavigate, useLocation } from 'react-router-dom';

const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        // Redirect to the same location or to login page if not authenticated
        navigate(location.pathname !== "/" ? location.pathname : "/");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate, location]);

  return { isLoggedIn, loading };
};

export default useAuthStatus;
