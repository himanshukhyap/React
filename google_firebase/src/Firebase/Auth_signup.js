import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfig";

export const createuser = async (data) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, data.Email, data.Password)
        console.log(user);
        
    }
    catch (error) {
        console.log(error.message);
    }

}