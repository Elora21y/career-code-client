import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase-init";
import { Toaster } from "react-hot-toast";
import axios from "axios";


const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [users , setUsers] = useState(null)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(()=>{
    const unsubscribe =
        onAuthStateChanged(auth , (currentUser) =>{
            setUsers(currentUser)
            setLoading(false)
            if(currentUser?.email) {
              axios.post('http://localhost:2100/jwt' ,{email : currentUser.email} , 
                {withCredentials : true}
              )
              .then(res =>{
                console.log(res.data)
              })
              .catch(err =>{
                console.log(err.message)
              })
            }
            // if(currentUser?.email){
            //   const userData ={email : currentUser.email}
            //   axios.post('http://localhost:2100/jwt' , userData,
            //     {withCredentials : true}
            //   )
            //   .then(res =>{
            //     console.log(res.data)
            //   })
            //   .catch(err =>{
            //     console.log(err.message)
            //   })
            // }
        })
    
    return() => unsubscribe()
  },[])
console.log(users)

const signGoogle = () =>{
  setLoading(true)
  return signInWithPopup(auth , googleProvider)
}

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    createUser,
    loginUser,
    logout,
    loading,
    users,
    signGoogle
  };
  return <>
  <AuthContext value={authInfo}>{children}</AuthContext>;
<Toaster
  position="top-center"
  reverseOrder={false}
/>
  </>
};

export default AuthProvider;
