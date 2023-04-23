import { Button, Grid } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import React from 'react'
import { signInWithPopup } from "firebase/auth";
import {auth, provider} from '../firebase';
import InstallButton from "./InstallButton";

const Login = (type, color) => {

  const loginWithGoogle = () =>{
    signInWithPopup(auth, provider)
  }

  return (
   <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{minHeight:'100vh'}}
   >

    <Button onClick={loginWithGoogle} variant="contained" startIcon={<GoogleIcon/>}>Sign in with Google</Button>
    <InstallButton />
   </Grid>
  )
}

export default Login