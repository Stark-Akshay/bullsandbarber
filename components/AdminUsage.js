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
} from "@mui/material/";

import classes from '@/styles/Home.module.css';


import { addDoc, collection, doc, getDocs, onSnapshot, setDoc } from "firebase/firestore";
import { useAuth } from "../Auth";
import { adminRef } from "../firebase";


const fakeData = [
  { id: 1, email: "user1@example.com", number: 1234567890, points: 50 },
  { id: 2, email: "user2@example.com", number: 2345678901, points: 20 },
  { id: 3, email: "user3@example.com", number: 3456789012, points: 80 },
  { id: 4, email: "user4@example.com", number: 4567890123, points: 60 },
  { id: 5, email: "user5@example.com", number: 5678901234, points: 30 },
  { id: 6, email: "user6@example.com", number: 6789012345, points: 70 },
  { id: 7, email: "user7@example.com", number: 7890123456, points: 10 },
  { id: 8, email: "user8@example.com", number: 8901234567, points: 90 },
  { id: 9, email: "user9@example.com", number: 9012345678, points: 40 },
  { id: 10, email: "user10@example.com", number: 1234567890, points: 50 },
];

const AdminUsage = () => {
    const {currentUser} = useAuth();
    const [users, setUsers] = useState(fakeData);
    const [searchTerm, setSearchTerm] = useState("");
    const [admin, setAdmin] = useState(false);
    const handleEditPoints = (id, value) => {
      const updatedUsers = users.map((user) =>
        user.id === id ? { ...user, points: value } : user
      );
      setUsers(updatedUsers);
    };
  
    const filteredUsers = users.filter((user) => {
      if (searchTerm === "") {
        return true;
      }
      const searchLower = searchTerm.toLowerCase();
      return (
        user.email.toLowerCase().includes(searchLower) ||
        user.number.toString().includes(searchLower) ||
        user.points.toString().includes(searchLower)
      );
    });

    let emails = [""];
    let notes = [];
    //checking if the email exists start
          getDocs(adminRef)
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
            if(found){
              setAdmin(true);
            }
          }) 
        //checking if the email exists end

        if(admin){
          return (
            <div>
              <Typography variant="h4" gutterBottom>
              User Count: {users.length}
              </Typography>
              <TextField
                label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "20px",
                         width:'100%'
        
                        }}
              />
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="User Table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Email</TableCell>
                      <TableCell align="right">Number</TableCell>
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
                        <TableCell align="right">{user.number}</TableCell>
                        <TableCell align="right">{user.points}</TableCell>
                        <TableCell align="right" sx={{
                            display:"flex",
                            justifyContent:"right",
                            flexDirection:"row",
                            alignItems:"center"
                        }}>
                          <TextField
                            className={classes.input}
                            type="number"
                            defaultValue={user.points}
                            InputProps={{ inputProps: { min: 0, max: 100 } }}
                            onChange={(event) =>
                            handleEditPoints(user.id, event.target.value)
                            }
                            />
                            <Button variant="contained" color="primary">
                            Save
                            </Button>
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
