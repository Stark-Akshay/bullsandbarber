import styles from '@/styles/Home.module.css'
import Head from 'next/head'

const Profile =()=>{
    return(
        <div>
            <Head>
                <title>
                    Profile Page
                </title>
                <link rel='manifest' href='/manifest.json'/>
            </Head>
            <h1 className={styles.headertext}>Hello User!</h1>
            <h1 className={styles.subtext}>Welcome to Profile Page</h1>
        </div>
    )
};

export default Profile