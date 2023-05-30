import { createContext, useContext, useEffect, useState } from 'react'
import React from 'react'
import {getAuth} from "firebase/auth"
import Login from './components/Login';
import { getDocs, onSnapshot } from 'firebase/firestore';
import { adminRef, pointRef } from './firebase';
import Loading from './components/Loading';

const AuthContext = createContext({});



export const AuthProvider = ({children}) => {
  

    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    let emails = [""];
    let notes = [];
    

  useEffect(() => {
    const auth = getAuth();

    return auth.onIdTokenChanged(async(user)=>{
        if(!user){
            // console.log('no user');
            setCurrentUser(null);
            setLoading(false);
            return
        }
        const token = await user.getIdToken();
        setCurrentUser(user);
        setLoading(false);
      
      
        // console.log('token', token);
        // console.log('user', user);
    })


  }, [])
  

  if(loading){
    <Loading type="bubbles" color="blue"/>

  }

  else if(!currentUser){
    return <Login />
  }

  else{
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
      )
      
  }


}

export const useAuth = () => useContext(AuthContext)
