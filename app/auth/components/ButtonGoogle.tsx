// app/auth/components/ButtonGoogle.tsx

'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const ButtonGoogle = () => {
  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signIn('google');
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<GoogleIcon />}
      onClick={handleSignIn}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      Google
    </Button>
  );
};

export default ButtonGoogle;
