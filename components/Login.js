import { Button, Grid, TextField, Typography, Box, IconButton, Tooltip, Dialog, DialogTitle, DialogContent } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebase';
import InstallButton from "./InstallButton";
import styles from '@/styles/Home.module.css';
import { Android, Apple, MoreVert } from "@mui/icons-material";
import Image from 'next/image';

const Login = () => {
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
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
      <Button onClick={loginWithGoogle} variant="contained" sx={{ mt: '5%' }}>
        Sign in with Google
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
              <li>Click on the Add to home screen and follow further instructions (click on add)</li>
            </ol>
          </div>

          {/* Installation on Android */}
          <div className={styles.flex_col}>
            <Typography variant="body1" sx={{fontWeight:'bold'}}>Steps to install on Android</Typography>
            <ol className={styles.ensure_text_1}>
              <li>Make sure your Chrome Browser is updated</li>
              <li>Open <a href="https://bullsandbarber.vercel.app" className={styles.links}>Bulls and Barber</a> on Chrome Browser</li>
              <li>If a pop up does not appear asking you to add/share to homescreen and if you don't get any pop up.</li>
              <li>Click on the more button on chrome <MoreVert /> </li>
              <li>Click on Add to Home screen / Install App and follow further instructions</li>
            </ol>
          </div>
        </DialogContent>
      </Dialog>

      {/* <Button onClick={loginWithGoogle} variant="contained" startIcon={<GoogleIcon />}>
        Sign in with Google
      </Button>
      <InstallButton /> */}
      {/* <InstallButton/> */}
    </Grid>
  );
};

export default Login;
