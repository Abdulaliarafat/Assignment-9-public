import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth=getAuth(app)
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)     

  console.log(user)
  const createUser=(email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
  }
  const LogInUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const userProfile=(updateUser)=>{
      return updateProfile(auth.currentUser,updateUser)
  }
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
                return ()=>{
                  unSubscribe()
                }
    })
  },[])
  const LogOut=()=>{
    return signOut(auth)
  }

    const authData={
      user,
      setUser,
      createUser,
      LogInUser,
      userProfile,
      LogOut
    }
    return (
      <AuthContext value={authData}>
        {children}
      </AuthContext>
    );
};

export default AuthProvider;