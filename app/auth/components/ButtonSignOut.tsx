// app/auth/components/ButtonSignOut.tsx

'use client';

import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Button, Box } from '@mui/material';

const ButtonSignOut = () => {
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <Box display="flex" gap={2}>
      <Button variant="outlined" color="primary" onClick={handleSignOut}>
        Odhlásiť
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleCancel}>
        Zrušiť
      </Button>
    </Box>
  );
};

export default ButtonSignOut;
