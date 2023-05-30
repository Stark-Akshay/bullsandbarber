import { Avatar, Card, Typography, Box, LinearProgress, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css';
import { onSnapshot } from 'firebase/firestore';
import { pointRef } from "../firebase";
import PointCollect from "./PointCollect";
import { auth } from "../firebase";
import { useAuth } from "../Auth";
import usePointCollect from "./usePointCollect";

const UserCard = () => {
  const point = usePointCollect();
  const { currentUser } = useAuth();
  const [time, setTime] = useState(new Date());
  const [name, setName] = useState("User");
  let books = [];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    const unsubscribe = onSnapshot(pointRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        books.push({ ...doc.data(), id: doc.id });
        books.forEach((book) => {
          if (book.phonenumber === currentUser.phoneNumber) {
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
      </Card>
    </>
  );
};

export default UserCard;