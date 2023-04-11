import Link from "next/link";
import styles from "@/styles/Navbar.module.css"
import homes from "@/styles/Home.module.css"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () =>{

    return(
        <>
        <div className={styles.outer}>
            <div className={styles.inner}>
                <Link href="/">Home</Link>
                <Link href="/profile">Profile</Link>
                <Link href="/about">About</Link>
            </div>
        </div>


    <Box sx={{ flexGrow: 1 }} className={homes.bottom}>
      <AppBar position="static" elevation={0}
        sx={
            {
                backgroundColor: '#fff'
            }
        }
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="#3f51b5"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#3f51b5' }}>
            Bulls and Barber
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        </>
        
        

        
    )
};

export default Navbar
