// components/UploadForm.js

import { useState } from 'react';
import { storage, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { TextField, Button, Container } from '@mui/material';

function UploadForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState(0);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const storageRef = ref(storage, image.name);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on('state_changed',
      (snapshot) => {
        // You can add progress reporting here
      },
      (error) => {
        console.log(error);
      },
      async () => {
        const fileUrl = await getDownloadURL(uploadTask.snapshot.ref);

        await setDoc(doc(db, 'pointoffers', image.name), {
          title,
          description,
          points,
          url: fileUrl,
        });

        setTitle('');
        setDescription('');
        setPoints(0);
        setImage(null);
        setLoading(false);
      }
    );
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="Image title"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          label="Points"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="Image description"
          multiline
          required
        />
        <Button
          variant="contained"
          component="label"
          fullWidth
          margin="normal"
        >
          Upload File
          <input type="file" hidden onChange={onImageChange} required />
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Upload Image'}
        </Button>
      </form>
    </Container>
  );
}

export default UploadForm;
