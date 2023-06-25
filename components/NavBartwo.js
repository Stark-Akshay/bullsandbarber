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
import { Button, Snackbar } from '@mui/material';
import Person from '@mui/icons-material/Person';
import Home from '@mui/icons-material/Home';
import Info from '@mui/icons-material/Info';
import styles from '@/styles/Home.module.css';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ConfirmationNumber, NotificationsActive, Settings } from '@mui/icons-material';

export default function NavBartwo() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [granted, setGranted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(true);
  };


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);

  }

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose}>
        Close
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
      </IconButton>
    </React.Fragment>
  );

  const handleNotifClick = () =>{
    Notification.requestPermission().then(perm => {
      if (perm === 'granted') {
        setGranted([true]);
        handleClick();
      }

    })
  }

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
    <AppBar elevation={0} position="static" className={styles.appbar_bg}>
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1}} className={styles.appbar_text}>
          Bulls and Barbers
        </Typography>
        <IconButton onClick={handleNotifClick}>
          {granted?<NotificationsActive/>:<NotificationsIcon/>}
            
        </IconButton>
        {!isMobile && (
          <Box sx={{ display: 'flex' }} className={styles.display_onlymob}>
            <Link href="/" className={styles.linkButtons}>
              <Button>Home</Button>
            </Link>
            <Link href="/profile" className={styles.linkButtons}>
              <Button>Profile</Button>
            </Link>
            <Link href="/about" className={styles.linkButtons}>
              <Button>About</Button>
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );

  const drawer = (
    <Box
      sx={{ width: 250}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
      
        <ListItem component={Link} href="/useroffer">
          <ListItemIcon>
            <LocalOfferIcon/>
          </ListItemIcon>
          <ListItemText primary="Shop Offers" />
        </ListItem>
        <ListItem component={Link} href="/">
          <ListItemIcon>
            <ConfirmationNumber/>
          </ListItemIcon>
          <ListItemText primary="My Deals" />
        </ListItem>
        <ListItem component={Link} href="/profile">
          <ListItemIcon>
          <Settings/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );


    return (
      <Box sx={{ flexGrow: 1}}>
        {appBar}
        {isMobile && (
          <Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawer}
          </Drawer>
        )}
        
        <Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  message="Notification is on"
  action={action}
/>
      </Box>
    );
  }
  

