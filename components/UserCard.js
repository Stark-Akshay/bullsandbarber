import { Avatar, Card, Typography, Box, LinearProgress, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css';
import { getDocs } from "firebase/firestore";
import { pointRef } from "../firebase";
import PointCollect from "./PointCollect";
import { auth } from "../firebase";
import { useAuth } from "../Auth";


const UserCard = () => {
  
    const {currentUser} = useAuth();
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer);
  
  }, []);

  
    

  const hour = time.getHours();

  let greeting;
  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
    return (
      <>
      <Card className={styles.userCard} elevation={5} sx={{
        
      }}>
            <Box className={styles.cardDetail}>
            <Typography variant="h5" className={styles.greetText}>{greeting} {currentUser.displayName}</Typography>
            <IconButton onClick={() => auth.signOut()}>
            {currentUser.photoURL?<Avatar src={(currentUser.photoURL)} />:<Avatar><Typography>{currentUser.displayName.charAt(0)}</Typography></Avatar>}
            </IconButton>
            
            </Box>  

            <div className={styles.uCardPoints}>
            <PointCollect />
            </div>
        </Card>

      </>
    )
}

export default UserCard;