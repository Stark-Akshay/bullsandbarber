import styles from '@/styles/Home.module.css'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '../../firebase';

const Profile =()=>{
    return(
        <div>
            <Head>
                <title>
                    Profile Page
                </title>
                <link rel='manifest' href='/manifest.json'/>
            </Head>
            <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => auth.signOut()}>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
            </ListItem>
            </List>
        </div>
    )
};

export default Profile