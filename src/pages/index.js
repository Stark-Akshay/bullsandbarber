import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import InstallButton from '../../components/InstallButton'
import HomeFront from '../../components/HomeFront'
import UserCard from '../../components/UserCard'
import Login from '../../components/Login'
import UserImageList from '../../components/UserImageList'
import { useEffect } from 'react'

export default function Home() {
  // return <Login />
  const Notify = () =>{
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("Hi there!");
      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          const notification = new Notification("Hi there!");
          // …
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  };

  return (
    <>

    <Head>
      <title>Bulls and Barber</title>
      <link rel='manifest' href='/manifest.json'/>
    </Head>
      <div className={styles.container}>
        
        <UserCard />
        <UserImageList />
        {Notify()}
        {/* <InstallButton /> */}
      </div>
    </>
  )
}
