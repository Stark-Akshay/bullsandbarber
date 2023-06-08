import { addDoc, collection, doc, getDocs, onSnapshot, setDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db, pointRef } from '../firebase';
import { getToken } from 'firebase/messaging';
import { Box ,Typography, Modal, TextField, Button, Card, Paper } from '@mui/material';
import { useAuth } from '../Auth';
import styles from '@/styles/Home.module.css';



const PointCollect = () => {
  const [point, setPoint] = useState(0);
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const {currentUser} = useAuth();
  let books = [];

  useEffect(() => {

    let phones = [""];
    let notes = [];
    var found = false;
    //checking if the phone number exists start
    getDocs(pointRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        notes.push({...doc.data(), id:doc.id});
        notes.forEach((note) => {
          phones.push(note.phonenumber);
     
        })
      })
    })
    .then(() => {
      const found = phones.includes(currentUser.phoneNumber)
  
      if(!found){

        setOpen(true);  // open the modal
      }
    }) 
    //checking if the phone number exists end

    //snapshot code starting
    onSnapshot(pointRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
          books.push({ ...doc.data(), id: doc.id });
          books.forEach((book) => {
            if (book.phonenumber == currentUser.phoneNumber) {
              setPoint(book.point);
            }
          });
          
        });
    })
    //snapshot code end 
    
  }, []);

  // Function to handle the submit of the name
  const handleSubmit = async () => {
    await addDoc(pointRef,{phonenumber:currentUser.phoneNumber, point:0, name: name});
    setOpen(false);
  }

  // Function to handle input change
  const handleInputChange = (event) => {
    setName(event.target.value);
  }

  const body = (
    <Box sx={{
      position:"absolute",
      display:"flex",
      width:'100%',
      justifyContent:"center",
      margin:"auto",
      top:"30%",
    

    }}>
      <Card sx={{
        margin:"auto",
        width:"90%",
        textAlign:"center",
        height:"",
       
      }}>
      <h2 id="simple-modal-title" className={styles.text_who}>What should we call you?</h2>
      <Box sx={{
        display:"flex",
        justifyContent:"space-around",
       margin:"auto",
       alignItems:"center",
       marginBottom:"15px"
      }}>
      <TextField 
        id="outlined-basic" 
        label="Name" 
        variant="outlined"
        onChange={handleInputChange} 
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      </Box>
      
    </Card>
    </Box>
    
    
  );

  return (
    <div>
      <Modal
        open={open}
        // onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
      >
        {body}
      </Modal>
    </div>
  );
};

export default PointCollect;
