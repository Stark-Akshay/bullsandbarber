import styles from '@/styles/Home.module.css'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import LogoutIcon from '@mui/icons-material/Logout';
import UserOfferList from '../../components/UserOfferList';

const About = () =>{
    return(
        <div>
            <Head>
                <title>User Offer</title>
                <link rel='manifest' href='/manifest.json'/>
            </Head>
            <UserOfferList />
        </div>
    )
}

export default About