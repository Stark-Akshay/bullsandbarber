import { Avatar, Card, Typography, Box, LinearProgress, IconButton, Button } from "@mui/material";
import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css';
import { onSnapshot } from 'firebase/firestore';
import { messaging, onMessageListener, pointRef } from "../firebase";
import PointCollect from "./PointCollect";
import { auth } from "../firebase";
import { useAuth } from "../Auth";
import usePointCollect from "./usePointCollect";
import Image from 'next/image';
import { getMessaging, getToken } from "firebase/messaging";




const UserCard = () => {
  const point = usePointCollect();
  const { currentUser } = useAuth();
  const [time, setTime] = useState(new Date());
  const [name, setName] = useState("User");
 
  let books = [];
  
  const token = async () => {
    const currentToken = await getToken(messaging, { vapidKey: 'BCOrm48yCZ02KkQ4_HSSb4zxmgEVOG8P2YZCYMj6nBHHP01w5K2K9DKp7z_TaBI2lzxU0ddG2hSLtZfKzsYO6L8' });
    // console.log('current token: ', currentToken);
  }
  const registrationToken = 'dgXppLshBt6Sku8_vAV8PT:APA91bE_QRS37jUDMX-GeeIZEG0enwT-u8f2widsB_NFdVqyyuLdZwjWOy5vxK55UaEQdB82YbrfnTakFvev1Fw8fyTosYrKnzmZFDAmvYQUGIFw4QJNzHdrOOMlYA02_V667oHzZIwQ';
const clickSend = () => {
    
const message = {
  data:{
    title:"hello",
    body:"test",
  },
  token:registrationToken
};

const messaging = getMessaging();
  messaging.send(message)
  .then((response) => {
    console.log('Success: ',response);
  })
  .catch((error)=>{
    console.log("Error: ",error)
  });


  }

  onMessageListener().then(payload => {
    // setNotification({title: payload.notification.title, body: payload.notification.body})
    new Notification(payload.notification.title,{
      body: notification.body,
    })
    
    console.log(payload);
  }).catch(err => console.log('failed: ', err));


  async function requestPermission(){
    const permission = await Notification.requestPermission();
    if(permission === 'granted'){
      console.log('Notification permission granted.');
    }
    else if(permission === 'denied'){
      console.log('Notification denied.');
    }
  }

 useEffect(() => {
  token();
    requestPermission();
 }, []);

  useEffect(() => {

    const timer = setInterval(() => setTime(new Date()), 1000);

    const unsubscribe = onSnapshot(pointRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id });
        books.forEach((book) => {
          if (book.phonenumber === currentUser.phoneNumber?currentUser.phoneNumber:currentUser.email) {
            setName(book.name);
           
          }
        });
      });
    });

    return () => {
      clearInterval(timer);
      unsubscribe();
    };
  }, [currentUser.phoneNumber]);

  const hour = time.getHours();

  let greeting;
  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <>
    <PointCollect />
      <Card className={[styles.box_gradient, styles.gold].join(' ')} elevation={15} >
        <div className={styles.card_div}>
        <p className={styles.greetText}>
            {greeting} {name}
          </p>
          <p className={styles.avlpoint_class}>
            AVAILABLE POINTS
          </p>
          <p className={styles.point_class}>
            {point}
          </p>
        </div>
        {/* <div className={styles.card_logo_flex}>
          <Image
            src={'/Images/bb.png'}
            width={40}
            height={40}
            alt="b and b official logo"
          >

          </Image>
        </div> */}
        
      </Card>
      {/* <Button onClick={clickSend}>TEST</Button> */}
      
    </>
  );
};

export default UserCard;