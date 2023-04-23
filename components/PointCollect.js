import { addDoc, collection, doc, getDocs, onSnapshot, setDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db, pointRef } from '../firebase';
import { Typography } from '@mui/material';
import { useAuth } from '../Auth';


const PointCollect = () => {
  const [point, setPoint] = useState(0);
  const {currentUser} = useAuth();
  let books = [];
  useEffect(() => {

    let emails = [""];
    let notes = [];
    var found = false;
    //checking if the email exists start
          getDocs(pointRef)
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              notes.push({...doc.data(), id:doc.id});
              notes.forEach((note) => {
                // console.log(note.email);
                emails.push(note.email);
              })
            })
          })
          .then(() => {
            const found = emails.includes(currentUser.email)
            if(!found){
              addDoc(pointRef,{email:currentUser.email, point:0});
            }
          }) 
        //checking if the email exists end
  

    //snapshot code starting
      onSnapshot(pointRef, (snapshot) => {
        snapshot.docs.forEach((doc) => {
            books.push({ ...doc.data(), id: doc.id });
            // console.log(books);
            books.forEach((book) => {
              if (book.email == currentUser.email) {
                setPoint(book.point);
              }
            });
            
          });
      })
      //snapshot code end 
    
  }, []);



  return (
    <Typography variant="h6">
                Your Points: {point}
              </Typography>
  );
};

export default PointCollect;
