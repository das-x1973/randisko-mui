// app/auth/components/ButtonSignOut.tsx

'use client';

import { useState } from 'react';
import { signOut } from 'next-auth/react';
import { Button,Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Box,} from '@mui/material';

const ButtonSignOut = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignOut = () => {
    signOut();
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Odhlásiť
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Odhlásiť sa</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Naozaj sa chcete odhlásiť?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Zrušiť
          </Button>
          <Button onClick={handleSignOut} color="primary" autoFocus>
            Odhlásiť
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ButtonSignOut;
