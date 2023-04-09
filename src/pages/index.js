import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import InstallButton from '../../components/InstallButton'
import HomeFront from '../../components/HomeFront'

export default function Home() {
  return (
    <>
    <Head>
      <title>Bulls and Barber</title>
      <link rel='manifest' href='/manifest.json'/>
    </Head>
      <div className={styles.container}>
        <h1 className={styles.headertext}>Hello User!</h1>
        <h1 className={styles.subtext}>Welcome to Bulls and Barber</h1>
        {/* <HomeFront /> */}
        <InstallButton />
      </div>
    </>
  )
}
