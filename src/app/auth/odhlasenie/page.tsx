// app/auth/odhlasenie/page.tsx

import { Box, Typography } from '@mui/material';
import ButtonSignOut from '@/src/app/auth/components/ButtonSignOut';

export default function LogOutPage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      gap={3}
      bgcolor="background.default"
      p={3}
    >
      <Typography variant="h5" color="primary" fontWeight="bold">
        Skutočne sa chcete odhlásiť?
      </Typography>
      <ButtonSignOut />
    </Box>
  );
}
