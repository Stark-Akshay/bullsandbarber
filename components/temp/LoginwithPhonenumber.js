import { Button, Grid, TextField, Typography, Box, IconButton, Tooltip, Dialog, DialogTitle, DialogContent } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, provider } from '../firebase';
import InstallButton from "./InstallButton";
import styles from '@/styles/Home.module.css';
import { Android, Apple, MoreVert } from "@mui/icons-material";
import Image from 'next/image';
const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('+971');
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [phoneError, setPhoneError] = useState('');
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);

  const validatePhoneNumber = () => {
    const phoneRegex = /^[+]?\d{1,3}\d{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setPhoneError('Please enter a valid phone number with a valid phone code (e.g., +971XXXXXXXXX).');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const loginWithGoogle = () => {
    signInWithRedirect(auth, provider);
  };

  const loginWithPhoneNumber = async () => {
    if (!showOTPInput) {
      if (!validatePhoneNumber()) {
        return;
      }

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

  const handleInfoDialogOpen = () => {
    setInfoDialogOpen(true);
  };

  const handleInfoDialogClose = () => {
    setInfoDialogOpen(false);
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
        error={phoneError !== ''}
        helperText={phoneError}
      />
      {showOTPInput && (
        <Box sx={{ marginTop: "15px" }}>
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
      <Button onClick={loginWithPhoneNumber} variant="contained" sx={{ mt: '5%' }}>
        {showOTPInput ? 'Submit OTP' : 'Sign in with Phone Number'}
      </Button>

{/* Installing instructions */}
        <div className={[styles.flex_col, styles.mt].join(' ')} onClick={handleInfoDialogOpen}>
          <div className={styles.flex_row}>
          <Tooltip title="How to install on Android">
          <IconButton>
            <InfoIcon/>
          </IconButton>
          </Tooltip>
          <p className={styles.ensure_text}>
              How to Install?
            </p>
          </div>
        </div>

{/* Installing instructions end*/}

      {/* Information Dialog */}
      <Dialog open={infoDialogOpen} onClose={handleInfoDialogClose} sx={{overflow:'auto', height:'80vh'}}>
        <DialogTitle>How to Install</DialogTitle>
        <DialogContent>
          {/* Content of Information Dialog */}
          {/* Add your content for Information 1 */}
          <div className={styles.flex_col}>
           <Typography variant="body1" sx={{fontWeight:'bold'}}>Steps to install on Apple</Typography>
            <ol className={styles.ensure_text_1}>
              <li>Make sure your Safari Browser is updated</li>
              <li>Open <a href="https://bullsandbarber.vercel.app" className={styles.links}>Bulls and Barber</a> on Safari Browser</li>
              <li>Click on the share button on the bottom bar
              <Image 
                className={styles.ml_5}  
                src="/Images/apple_icon_share.png"
                alt="Apple share icon"
                width={20}
                height={30}
              ></Image>
               </li> 

               <li>Click on the Add to home screen and follow further instructions (click on add)
               </li> 
            </ol>
           
          
          </div>

        {/* Installation on Android */}
          <div className={styles.flex_col}>
           <Typography variant="body1" sx={{fontWeight:'bold'}}>Steps to install on Android</Typography>
            <ol className={styles.ensure_text_1}>
            <li>Make sure your Chrome Browser is updated</li>
            <li>Open <a href="https://bullsandbarber.vercel.app" className={styles.links}>Bulls and Barber</a> on Chrome Browser</li>
              <li>
                If a pop up does not appear asking you to add/share to homescreen and if you dont get any pop up.
               </li> 
              <li>Click on the more button on chrome <MoreVert /> </li>
               <li>Click on Add to Home screen / Install App and follow further instructions
               </li> 
            </ol>
           
          
          </div>
          
  
        </DialogContent>
      </Dialog>
      
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
