import { Avatar, Card, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css';

const UserCard = () => {
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
        <Card className={styles.userCard} elevation={5}>
            <Box className={styles.cardDetail}>
            <Typography variant="h6" className={styles.greetText}>{greeting} John Doe</Typography>
            <Avatar sx={{
                backgroundColor:'#b222ea'
            }}>J</Avatar>
            </Box>
            
        </Card>
    )
}

export default UserCard;