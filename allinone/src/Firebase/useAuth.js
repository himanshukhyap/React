// src/hooks/useAuth.js
import { useNavigate } from 'react-router-dom';
import { signOut, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './FirebaseConfig';
import { provider } from './GoogleAuthProvider ';

const useAuth = () => {
  const navigate = useNavigate();

  const Login = async (data) => {
    try {
        const userlogin = await signInWithEmailAndPassword(auth, data.EmailL, data.PasswordL)
        console.log(userlogin);
    } catch (error) {
        console.log(error.message);
    }

}

  const Auth_singout = async () => {
    console.log("Signing out");
    try {
      await signOut(auth);
      navigate('/'); // Redirect to login page after sign-out
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const googleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

    //   console.log('Credential:', credential);
    //   console.log('Token:', token);
      console.log('User:', user);

      // Redirect to the originally requested page or default to the dashboard
      navigate('/dashboard');
    } catch (error) {
      const errorMessage = error.message;
      console.log('Error:', errorMessage);
    }
  };

  
const createuser = async (data) => {
  try {
      const user = await createUserWithEmailAndPassword(auth, data.Email, data.Password)
      console.log(user);
      
  }
  catch (error) {
      console.log(error.message);
  }

};

const UserupdateProfile=(user)=>{
  updateProfile(user, {
      displayName: "Kashyap", photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      console.log("Profiel Update");
      // Profile updated!
      // ...
    }).catch((error) => {
      console.log(error);
      // An error occurred
      // ...
    });
} 

  return {Login, Auth_singout, googleSignIn, createuser, UserupdateProfile};
};

export default useAuth;
