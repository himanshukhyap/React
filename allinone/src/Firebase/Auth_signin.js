import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FirebaseConfig";

export     const Login = async (data) => {
    try {
        const userlogin = await signInWithEmailAndPassword(auth, data.EmailL, data.PasswordL)
        console.log(userlogin);
    } catch (error) {
        console.log(error.message);
    }

}