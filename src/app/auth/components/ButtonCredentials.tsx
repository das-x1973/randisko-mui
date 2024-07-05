// app/auth/components/ButtonCredentials.tsx

'use client';

import { useState } from 'react';
import { z } from 'zod';
import { Button, TextField, Typography, Box } from '@mui/material';

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6);

const ButtonCredentials = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate email and password
    try {
      emailSchema.parse(email);
      passwordSchema.parse(password);

      // Add logic to create a new user in the database with the hashed password
      // You will need to implement this logic on your server/API side
      // console.log('Credentials:', email, password);

      // Clear the form fields
      console.log('Email', email)
      console.log('Pass', password)

      setEmail('');
      setPassword('');
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrorMessage(error.errors[0].message);
      }
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        type="email"
        label="Zadajte Váš email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ borderColor: 'pink', borderRadius: 1 }}
      />
      <TextField
        type="password"
        label="Zadajte Vaše heslo"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ borderColor: 'pink', borderRadius: 1 }}
      />
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      <Button
        variant="outlined"
        color="primary"
        onClick={handleRegister}
        sx={{ borderRadius: 1 }}
      >
        Prihlásiť
      </Button>
    </Box>
  );
};

export default ButtonCredentials;
