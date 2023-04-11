import { Avatar, Card, Typography, Box } from "@mui/material";
import styles from '@/styles/Home.module.css';

const UserCard = () => {
    return (
        <Card className={styles.userCard} elevation={5}>
            <Box className={styles.cardDetail}>
            <Typography variant="h6" className={styles.greetText}>Good Morning John Doe</Typography>
            <Avatar sx={{
                backgroundColor:'#b222ea'
            }}>J</Avatar>
            </Box>
            
        </Card>
    )
}

export default UserCard;