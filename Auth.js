import { createContext, useContext, useEffect, useState } from 'react'
import React from 'react'
import {getAuth} from "firebase/auth"
import Login from './components/Login';
import { getDocs, onSnapshot } from 'firebase/firestore';
import { pointRef } from './firebase';

const AuthContext = createContext({});



export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    

  useEffect(() => {
    const auth = getAuth();
    return auth.onIdTokenChanged(async(user)=>{
        if(!user){
            // console.log('no user');
            setCurrentUser(null);
            return
        }
        const token = await user.getIdToken();
        setCurrentUser(user);
        
        // console.log('token', token);
        // console.log('user', user);
    })
  }, [])


  if(!currentUser){
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
