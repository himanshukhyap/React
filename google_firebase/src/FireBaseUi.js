var firebase = require('firebase');
var firebaseui = require('firebaseui');
import React from 'react'

function FireBaseUi() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', {
        signInOptions: [
          // List of OAuth providers supported.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],
        // Other config options...
      });
  return (
    <div>FireBaseUi</div>
  )
}

export default FireBaseUi