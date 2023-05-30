import { useEffect, useState, Fragment } from 'react';
import { db, storage } from '../firebase';
import { collection, onSnapshot, query, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { Card, CardActionArea, CardMedia, CardContent, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Container, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import usePointCollect from './usePointCollect';
import styles from '@/styles/Home.module.css';
function UserImageList() {
  const point = usePointCollect();
  const [images, setImages] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const q = query(collection(db, 'pointoffers'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let imageList = [];
      snapshot.forEach((doc) => {
        const image = { id: doc.id, ...doc.data() };
        
        if (parseInt(point)>=parseInt(image.points)) {
          imageList.push(image);
        }
      });
      setImages(imageList);
    });

    // Cleanup function
    return () => unsubscribe();
  }, [point]);

  return (
    <>
    <div className={styles.deal_cover}>
      <p className={styles.deal_text}>
        Your Deals
      </p>

      <div className={styles.deal_line}></div>
    </div>
    <Container maxWidth="md">
      {images.length===0?(<p className={styles.no_deals}>No deals available at the moment
      </p>):
      <List style={{ maxHeight: '40vh', overflow: 'auto' }}>
        {images.map((image) => (
          <ListItem key={image.id} button onClick={() => handleCardClick(image)}>
            <div className={styles.item_card}>

              <div className={styles.item_image_wrapper}>
                <img src={image.url} alt="" className={styles.item_image} />
              </div>

              <div className={styles.image_title_wrapper}>
              <div className={styles.title_real}>
              <p className={styles.image_title}>
                {image.title}
              </p>
              <p className={styles.image_description}>
                {image.description}
              </p>
             <Button variant='outlined' className={styles.point_button}>{image.points}</Button>
              </div>
              </div>
              
              

            </div>
          </ListItem>
        ))}
      </List>
      }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Product Details</DialogTitle>
        <DialogContent>
          {selectedImage && (
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={selectedImage.url}
                  alt={selectedImage.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {selectedImage.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedImage.description}
                  </Typography>
                  <Typography variant="body1">Points: {selectedImage.points}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
    </>
  );
}

export default UserImageList;
