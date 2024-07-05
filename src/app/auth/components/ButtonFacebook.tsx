// app/auth/components/ButtonFacebook.tsx

'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const ButtonFacebook = () => {
  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn('google');
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<FacebookIcon />}
      onClick={handleSignIn}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      Facebook
    </Button>
  );
};

export default ButtonFacebook;
