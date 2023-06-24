import { useEffect, useState, Fragment } from 'react';
import { db, storage } from '../firebase';
import { collection, onSnapshot, query, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { Card, CardActionArea, CardMedia, CardContent, List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Container, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import usePointCollect from './usePointCollect';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
function UserOfferList() {

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
    const q = query(collection(db, 'shopoffers'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      let imageList = [];
      snapshot.forEach((doc) => {
        const image = { id: doc.id, ...doc.data() };

          imageList.push(image);

      });
      setImages(imageList);
 
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  return (
    <>
    <div className={styles.deal_cover}>
      <p className={[styles.deal_text, styles.gold_font].join(' ')}>
        Shop Deals
      </p>

      <div className={styles.deal_line}></div>
    </div>
    <Container maxWidth="md">
      {images.length===0?(
      <div className={[styles.flex_col, styles.just_centr].join(' ')}>
      <p className={[styles.no_deals, styles.mb_0].join(' ')}>No deals available at the moment
      </p>
      {/*new image to be added*/ }
      {/* <Image

        src="/Images/barber.svg"
        width={300}
        height={300}
        alt='deals not found'
      >

      </Image> */}
      </div>
      
      ):
      <List style={{ maxHeight: '60vh', overflow: 'auto' }}>
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
              </div>
              </div>
              
              

            </div>
          </ListItem>
        ))}
      </List>
      }
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title"  className={styles.card_bg}>Offer Details</DialogTitle>
        <DialogContent  className={styles.card_bg}>
          {selectedImage && (
            <Card sx={{width:'auto'}} className={[styles.box_gradient, styles.gold, styles.product_shadow].join(' ')}>
              <CardActionArea>
                <CardMedia
                  className={styles.product_image}
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
                </CardContent>
              </CardActionArea>
            </Card>
          )}
        </DialogContent>
        <DialogActions  className={styles.card_bg}>
          <Button onClick={handleClose} sx={{color:'#000'}}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
    </>
  );
}

export default UserOfferList;
