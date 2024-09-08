import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Login } from '../Firebase/Auth_signin';
import { createuser } from '../Firebase/Auth_signup';
import { auth } from './FirebaseConfig';



function EmailPassword() {
    const [user, setuser] = useState({ email: "", uid: "",displayName:"" ,photoURL:"",emailVerified:""})
    const { register, handleSubmit } = useForm();
    const onSubmitRegister = data => { createuser(data); console.log(data) }
    const onSubmitLogin = data => { Login(data) }

    onAuthStateChanged(auth, (currentUser: any) => {

        setuser(currentUser)

    })
   if (user!==null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    console.log(displayName);
   }
    
// UserupdateProfile(user)
    const LogOut = async () => {
        await signOut(auth).then(() => {
            console.log("Signout successful")
        }).catch((error) => { console.log(error) })
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmitRegister)}>
                <div className="d-flex gap-3 my-3">
                    <input placeholder="Email"  {...register("Email")} />
                    <input placeholder="Password" {...register("Password")} />
                    <button >Register</button>
                </div>
            </form>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <div className="d-flex gap-3 my-3">
                    <input placeholder="Email"   {...register("EmailL")} />
                    <input placeholder="Password"  {...register("PasswordL")} />

                    <button  >Login</button>
                </div>
            </form>

            <h1>{user?.email}</h1>
            <h1>{user?.uid}</h1>

            <button onClick={LogOut}>Logout</button>
        </>
    )
}

export default EmailPassword