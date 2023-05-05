import React, { useState } from "react";
// import { withStyles } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material/";

import classes from '@/styles/Home.module.css';
import { addDoc, collection, doc, getDocs, onSnapshot, query, setDoc } from "firebase/firestore";
import { useAuth } from "../Auth";
import { adminRef, auth, pointRef } from "../firebase";
import { useEffect } from "react";


const AdminUsage = () => {
    const {currentUser} = useAuth();
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [admin, setAdmin] = useState(false);
    const [tempid, setTempID] = useState("");
    const [temppoints, setTempPoints] = useState(0);

    const handleEditPoints = async (id, value) => {
        try {
          const docRef = doc(pointRef, id);
          await setDoc(docRef, { point: value }, { merge: true });
        //   const updatedUsers = users.map((user) =>
        //     user.id === id ? { ...user, points: value } : user
        //   );
        //   setUsers(updatedUsers);
        } catch (error) {
          console.error("Error updating points:", error);
        }
      };
  
    const filteredUsers = users.filter((user) => {
      if (searchTerm === "") {
        return true;
      }
      const searchLower = searchTerm;
      return (
        user.email.toLowerCase().includes(searchLower) ||
        user.id.toString().includes(searchLower) ||
        user.point.toString().includes(searchLower)
      );
    });



    useEffect(() => {
            const q = query(pointRef);
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
            
                setUsers(
                    querySnapshot.docs.map(
                        doc => ({
                            ...doc.data(), id:doc.id
                        })
                    )
                )
            });

            return unsubscribe
    }, [])
    


    let emails = [""];
    let notes = [];
    //checking if the email exists start
          getDocs(adminRef)
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              notes.push({...doc.data(), id:doc.id});
              notes.forEach((note) => {
              
                emails.push(note.email);
              })
            })
          })
          .then(() => {
            const found = emails.includes(currentUser.email)
            if(found){
              setAdmin(true);
            }
          }) 
        //checking if the email exists end

        if(admin){
          return (
            <div>
                <div>
                <Typography variant="h4" gutterBottom>
              User Count: {users.length}
              </Typography>
                </div>
              
                <div className={classes.searchbar}>
                <TextField
                label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "20px",
                         width:'100%'
        
                        }}
              />
                </div>
              
             
              
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="User Table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Email</TableCell>
                      {/* <TableCell align="center">ID</TableCell> */}
                      <TableCell align="right">Points</TableCell>
                      <TableCell align="right">Edit Points</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell component="th" scope="row">
                          {user.email}
                        </TableCell>
                        {/* <TableCell align="center">{user.id}</TableCell> */}
                        <TableCell align="right">{user.point}</TableCell>
                        <TableCell align="right" sx={{
                            display:"flex",
                            justifyContent:"right",
                            flexDirection:"row",
                            alignItems:"center"
                        }}>
                          <TextField
                            className={classes.input}
                            type="number"
                            defaultValue={user.point}
                            InputProps={{ inputProps: { min: 0, max: 100 } }}
                            onChange={
                                (event) =>
                                handleEditPoints(user.id, event.target.value)
                            }
                            />
                        
                            </TableCell>
                            </TableRow>
                            ))}
                            </TableBody>
                            </Table>
                            </TableContainer>
                            </div>
                            );
        }

        else{
          return(
            <>
            <h1>Sorry you dont have access</h1>
            </>
          )
        }
  
   };
                    
export default AdminUsage;