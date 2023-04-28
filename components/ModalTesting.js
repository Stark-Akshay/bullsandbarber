import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function ModalTesting() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Modal Title</DialogTitle>
        <DialogContent>
          <p>This is the content of the modal.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
