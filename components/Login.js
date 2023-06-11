// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase';
// import { Box, Button, Container, TextField, Typography } from '@mui/material';

// const AuthPage = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       // Account creation successful, you can redirect or show a success message here
//     } catch (error) {
//       // Handle specific errors
//       if (error.code === 'auth/email-already-in-use') {
//         setError('An account with this email already exists.');
//       } 
      
//       else if(error.code === 'auth/weak-password'){
//           setError('Password should be atleast 6 characters');
//       }

//       else {
//         setError(error.message);
//       }
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//       // Handle specific errors
//       if (error.code === 'auth/wrong-password') {
//         setError('Invalid password. Please try again.');
//       } else if (error.code === 'auth/user-not-found') {
//         setError('No user found with this email.');
//       } else {
//         setError(error.message);
//       }
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Sign In or Sign Up
//         </Typography>
//         {error && <Typography color="error">{error}</Typography>}
//         <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
//           <TextField
//             type="email"
//             label="Email"
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             type="password"
//             label="Password"
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//             Sign In
//           </Button>
//           <Button onClick={handleSignUp} fullWidth variant="outlined" sx={{ mb: 2 }}>
//             Sign Up
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default AuthPage;


import { useState } from 'react';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase';
import { Box, Button, Container, TextField, Typography,IconButton, Tooltip, Dialog, DialogTitle, DialogContent } from '@mui/material';
import styles from '@/styles/Home.module.css';
import InfoIcon from '@mui/icons-material/Info';
import { Android, Apple, MoreVert } from "@mui/icons-material";
import Image from 'next/image';
const AuthPage = () => {
  const [infoDialogOpen, setInfoDialogOpen] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/useroffer");
      // Account creation successful, you can redirect or show a success message here
    } catch (error) {
      // Handle specific errors
      if (error.code === 'auth/email-already-in-use') {
        setError('An account with this email already exists.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters');
      } else {
        setError(error.message);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/useroffer");
    } catch (error) {
      // Handle specific errors
      if (error.code === 'auth/wrong-password') {
        setError('Invalid password. Please try again.');
      } else if (error.code === 'auth/user-not-found') {
        setError('No user found with this email.');
      } else {
        setError(error.message);
      }
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setError('Password reset email sent. Please check your inbox.');
    } catch (error) {
      setError('Failed to send password reset email. Please try again.');
    }
  };


  const handleInfoDialogOpen = () => {
    setInfoDialogOpen(true);
  };

  const handleInfoDialogClose = () => {
    setInfoDialogOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image src={'/Images/bb.png'} width={100} height={100}/>
        <Typography component="h1" variant="h5" className={styles.gold_font}>
          Sign In or Sign Up
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1 }}>
          <TextField
            type="email"
            label="Email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input_color}
          />
          <TextField
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input_color}
          />
          <Button className={styles.input_bg_color} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Button className={styles.input_sc_button} onClick={handleSignUp} fullWidth variant="outlined" sx={{ mb: 2 }}>
            Sign Up
          </Button>
          <Button className={styles.gold_font} onClick={handleForgotPassword} fullWidth variant="text" sx={{ mb: 2 }}>
            Forgot Password?
          </Button>
        </Box>

        
{/* Installing instructions */}
<div className={[styles.flex_col, styles.mt].join(' ')} onClick={handleInfoDialogOpen}>
          <div className={styles.flex_row}>
          <Tooltip title="How to install on Android">
          <IconButton>
            <InfoIcon fontSize='large' sx={{color:'#c39738'}}/>
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
      </Box>
    </Container>
  );
};

export default AuthPage;
