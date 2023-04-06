import styles from '@/styles/Home.module.css'
import Head from 'next/head'

const About = () =>{
    return(
        <div>
            <Head>
                <title>About Pages</title>
                <link rel='manifest' href='/manifest.json'/>
            </Head>
            <h1 className={styles.headertext}>Hello User!</h1>
            <h1 className={styles.subtext}>Welcome to About Page</h1>
        </div>
    )
}

export default About