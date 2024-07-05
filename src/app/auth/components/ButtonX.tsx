// app/auth/components/ButtonX.tsx

'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@mui/material';
import XIcon from '@mui/icons-material/X';

const ButtonX = () => {
  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn('google');
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<XIcon />}
      onClick={handleSignIn}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      Twitter
    </Button>
  );
};

export default ButtonX;
