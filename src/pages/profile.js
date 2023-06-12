import styles from '@/styles/Home.module.css'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import LogoutIcon from '@mui/icons-material/Logout';
import { auth } from '../../firebase';
import { useRouter } from 'next/router';

const Profile =()=>{

  const router = useRouter();
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
            <ListItemButton onClick={() => {
              router.push('/');
              auth.signOut();
              
              }}>
              <ListItemIcon>
                <LogoutIcon className={styles.gold_font}/>
              </ListItemIcon>
              <ListItemText primary="Logout" className={styles.gold_font}/>
            </ListItemButton>
            </ListItem>
             

            </List>
        </div>
    )
};

export default Profile