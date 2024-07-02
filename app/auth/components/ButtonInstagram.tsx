// app/auth/components/ButtonInstagram.tsx

'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const ButtonInstagram = () => {
  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn('google');
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<InstagramIcon />}
      onClick={handleSignIn}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      Instagram
    </Button>
  );
};

export default ButtonInstagram;
