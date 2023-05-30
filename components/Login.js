import { Button, Grid, TextField, Typography,Box } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import React, { useState } from 'react';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from '../firebase';
import InstallButton from "./InstallButton";
import Script from "next/script";

const Login = () => {

  const [phoneNumber, setPhoneNumber] = useState('+971');
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const loginWithGoogle = () => {
    signInWithRedirect(auth, provider);
  };

  const loginWithPhoneNumber = async () => {
    if (!showOTPInput) {
      const appVerifier = new RecaptchaVerifier('recaptcha-container', { size: 'invisible' }, getAuth());
      try {
        const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
        setConfirmationResult(result);
        setShowOTPInput(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const userCredential = await confirmationResult.confirm(otp);
        setShowOTPInput(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <TextField
      
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        label="Phone Number"
        type="tel"
        placeholder="+971*******"
        required
      />
      {showOTPInput && (
        <Box
        sx={{
          marginTop:"15px"
        }}
        >
              <TextField
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              label="OTP"
              type="number"
              required
            />

            <Typography textAlign={'center'}>Please Wait for the OTP!</Typography>
        </Box>
        
        
      )}
      <Button onClick={loginWithPhoneNumber} variant="contained" sx={{mt: '5%'}}>
        {showOTPInput ? 'Submit OTP' : 'Sign in with Phone Number'}
      </Button>
      
      {/* <Button onClick={loginWithGoogle} variant="contained" startIcon={<GoogleIcon />}>
        Sign in with Google
      </Button>
      <InstallButton /> */}
      <div id="recaptcha-container" />
      {/* <InstallButton/> */}
    </Grid>
  );
};

export default Login;
