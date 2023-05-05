import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { Button } from '@mui/material';
import Person from '@mui/icons-material/Person';
import Home from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import styles from '@/styles/Home.module.css';
import { useAuth } from '../Auth';
import { adminRef, auth, pointRef } from "../firebase";


export default function NavBarthree() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  
  


  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };



  const appBar = (
    <AppBar elevation={0} position="static" sx={{backgroundColor:'#fff'}}>
      <Toolbar>
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="#757de8"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#757de8' }}>
          Bulls and Barber
        </Typography>
        {!isMobile && (
          <Box sx={{ display: 'flex' }} className={styles.display_onlymob}>
            <Link href="/admin" className={styles.linkButtons}>
              <Button>Admin</Button>
            </Link>
            <Link href="" className={styles.linkButtons}>
              <Button onClick={() => auth.signOut()}>Logout</Button>
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
      <ListItem component={Link} href="/">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem component={Link} href="/profile">
          <ListItemIcon>
            <Person />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem component={Link} href="/about">
          <ListItemIcon>
            <Info />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );


    return (
      <Box sx={{ flexGrow: 1 }}>
        {appBar}
      </Box>
    );
  }
  

