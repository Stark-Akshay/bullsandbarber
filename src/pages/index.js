import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import InstallButton from '../../components/InstallButton'
import HomeFront from '../../components/HomeFront'
import UserCard from '../../components/UserCard'

export default function Home() {
  return (
    <>
    <Head>
      <title>Bulls and Barber</title>
      <link rel='manifest' href='/manifest.json'/>
    </Head>
      <div className={styles.container}>
        <UserCard />
        <InstallButton />
      </div>
    </>
  )
}
