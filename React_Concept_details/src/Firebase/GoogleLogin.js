import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth } from './FirebaseConfig';
import { provider } from './GoogleAuthProvider ';


function GoogleLogin() {
  const googleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential?.accessToken;
        // The signed-in user info.
          const user = result.user;
        
         console.log(credential)

          console.log(user);
      }).catch((error) => {
        // Handle Errors here.
        //   const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        //   const email = error.customData.email;
        // The AuthCredential type that was used.
        //   const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <>
      <button onClick={googleSingIn}>Google Login</button>
    </>
  )
}

export default GoogleLogin