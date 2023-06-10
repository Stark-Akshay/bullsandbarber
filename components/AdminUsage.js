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
  Tooltip,
} from "@mui/material/";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import classes from '@/styles/Home.module.css';
import { addDoc, collection, doc, getDocs, onSnapshot, query, setDoc, deleteDoc } from "firebase/firestore";
import { useAuth } from "../Auth";
import { adminRef, auth, pointRef } from "../firebase";
import { useEffect } from "react";
import DoneIcon from '@mui/icons-material/Done';


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

      const handleDelete = async (id) => {
        try {
            const docRef = doc(pointRef, id);
            await deleteDoc(docRef);
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };
  
    const filteredUsers = users.filter((user) => {
      if (searchTerm === "") {
        return true;
      }
      const searchLower = searchTerm;
      return (
        user.phonenumber.toLowerCase().includes(searchLower) ||
        (user.name && user.name.toLowerCase().includes(searchLower)) ||
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
    


    let phones = [""];
    let notes = [];
    //checking if the email exists start
          getDocs(adminRef)
          .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
              notes.push({...doc.data(), id:doc.id});
              notes.forEach((note) => {
              
                phones.push(note.phonenumber);
              })
            })
          })
          .then(() => {
            const found = phones.includes(currentUser.phoneNumber?currentUser.phoneNumber:currentUser.email);
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
                      <TableCell>Phone Number / Email</TableCell>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="right">Points</TableCell>
                      <TableCell align="right">Edit Points</TableCell>
                      <TableCell align="right">Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell component="th" scope="row">
                          {user.phonenumber}
                        </TableCell>
                        <TableCell align="center">{user.name}</TableCell>
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
                                (event) => {
                                    setTempID(user.id);
                                    setTempPoints(event.target.value);
                                }
                                
                            }
                            />
                            <Tooltip title="Submit">
                            <IconButton onClick={
                              () => { 
                                handleEditPoints(tempid,temppoints);
                              }
                            }>
                              <DoneIcon sx={{
                                color:"green"
                              }}/>
                            </IconButton>
                            </Tooltip>
                            
                        
                            </TableCell>
                            <TableCell align="right">
                              <Tooltip title="Delete">
                              <IconButton 
                            color="secondary" 
                            onClick={() => handleDelete(user.id)}
                            >
                            <DeleteIcon />
                        </IconButton>
                              </Tooltip>
                            
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
