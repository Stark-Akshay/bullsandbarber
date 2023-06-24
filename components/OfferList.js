// components/ImageList.js

import { useEffect, useState, Fragment } from 'react';
import { db, storage } from '../firebase';
import { collection, onSnapshot, query, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Container, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '@/styles/Home.module.css';


function OfferList() {
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  
  
  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleClickOpen = (image) => {
    setTitle(image.title);
    setDescription(image.description);
    setEditItem(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async (image) => {
    const imageRef = ref(storage, image.id);
    await deleteObject(imageRef);
    const imageDoc = doc(db, 'shopoffers', image.id);
    await deleteDoc(imageDoc);
  };

  const handleEdit = async () => {
    if (image) {
      const imageRef = ref(storage, image.name);
      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on('state_changed',
        (snapshot) => {
          // You can add progress reporting here
        },
        (error) => {
          console.log(error);
        },
        async () => {
          const fileUrl = await getDownloadURL(uploadTask.snapshot.ref);
          const imageDoc = doc(db, 'shopoffers', editItem.id);

          await updateDoc(imageDoc, {
            title,
            description,
            url: fileUrl,
          });

          handleClose();
        }
      );
    } else {
      const imageDoc = doc(db, 'shopoffers', editItem.id);

      await updateDoc(imageDoc, {
        title,
        description,
      });

      handleClose();
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'shopoffers'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let imageList = [];
      snapshot.forEach((doc) => {
        imageList.push({ id: doc.id, ...doc.data() });
      });
      setImages(imageList);
 
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  return (
    <Container maxWidth="md" className={styles.input_offer_bg}>
      <List style={{ maxHeight: '80vh', overflow: 'auto' }}>
        {images.map((image) => (
          <ListItem key={image.id}>
            <ListItemAvatar>
              <Avatar variant="square" src={image.url} />
            </ListItemAvatar>
            <ListItemText
            className={styles.input_offer_bg}
              primary={image.title}
              secondary={
                <Fragment className={styles.input_offer_bg}>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    className={styles.input_offer_bg}
                  >
                    {image.description}
                  </Typography>
                </Fragment>
              }
            />
            <IconButton edge="end" aria-label="edit" onClick={() => handleClickOpen(image)}>
              <EditIcon className={styles.input_offer_bg}/>
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(image)}>
              <DeleteIcon className={styles.input_offer_bg}/>
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Image</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Image Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Image Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            variant="contained"
            component="label"
          >
            Upload File
            <input type="file" hidden onChange={onImageChange} />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleEdit}>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default OfferList;
