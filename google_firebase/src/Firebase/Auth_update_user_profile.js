import { getAuth, updateProfile } from "firebase/auth";
import { auth } from "./FirebaseConfig";

export const UserupdateProfile=(user)=>{
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
