import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {app} from "../firebase";

export default function OAuth() {
    const  handleGoogleAuth = async ()=> {
        try  {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(provider,auth);
            console.log(result) 
        } catch (error){
            console.log("google account not found",error)
        }
    }

  return (
    <div>
      <button onClick={handleGoogleAuth} className= 'uppercase hover:opacity-3 bg-blue-700 text-white w-full p-2 rounded-lg' type="button">Connecting with Google</button>
    </div>
  )
}
