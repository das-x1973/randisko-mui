// app/auth/components/ButtonEmail.tsx

'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button, TextField, Typography, Box } from '@mui/material';

const ButtonEmail = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  let errorMessage: string | null = null;

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await verifyEmail(email);
      await signIn('email', { email });
      setIsLoading(false);
      setEmail(''); // Clear the email input after successful sign-in
    } catch (error) {
      setIsLoading(false);
      if (error) {
        alert('An error occurred. Please try again later.');
      }
    }
  };

  const verifyEmail = async (email: string) => {
    // Implement email verification logic here
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        type="email"
        label="Váš email kde Vám zašleme aktivačný link"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ borderColor: isLoading ? 'gray' : 'pink', borderRadius: 1 }}
      />
      {isLoading ? (
        <Button variant="outlined" color="primary" disabled>
          Načítava sa...
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSignIn}
          sx={{ borderRadius: 1 }}
        >
          {!errorMessage ? 'Registrovať' : 'Znova poslať odkaz'}
        </Button>
      )}
      {errorMessage && (
        <Typography color="error" variant="body2">
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default ButtonEmail;
