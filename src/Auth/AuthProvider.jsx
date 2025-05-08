import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext()
const auth=getAuth(app)
const provider= new GoogleAuthProvider()
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)   
  console.log(user)
  const createUser=(email,password)=>{
     setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
  }
  const LogInUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const userProfile=(updateUser)=>{
      return updateProfile(auth.currentUser,updateUser)
  }
  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
                setLoading(false)
              })
              return ()=>{
                unSubscribe()
              }

  },[])
  const LogOut=()=>{
    return signOut(auth)
  }
  const googleSignIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
  }

    const authData={
      user,
      setUser,
      createUser,
      LogInUser,
      userProfile,
      LogOut,
      setLoading,
      loading,
      googleSignIn

    }
    return (
      <AuthContext.Provider value={authData}>
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;