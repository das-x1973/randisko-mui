// app/auth/prihlasenie/page.tsx

import { Box, Typography, Divider } from '@mui/material';
import ButtonGoogle from '@/src/app/auth/components/ButtonGoogle';
import ButtonFacebook from '@/src/app/auth/components/ButtonFacebook';
import ButtonInstagram from '@/src/app/auth/components/ButtonInstagram';
import ButtonX from '@/src/app/auth/components/ButtonX';
import ButtonCredentials from '@/src/app/auth/components/ButtonCredentials';

export default function SignInPage() {
  return (
    <Box textAlign="center" sx={{ mt: 4 }}>
      <Typography variant="h6" color="primary">
        Na vstup do Randiska môžete použiť svoj účet:
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
        <ButtonGoogle />
        <ButtonFacebook /> 
        <ButtonInstagram />
        <ButtonX />
        <Divider variant="middle" sx={{ width: '100%', my: 2 }} />
        <Typography variant="body1" color="primary">
          alebo klasický email:
        </Typography>
        <Divider variant="middle" sx={{ width: '100%', mb: 2 }} />
        <ButtonCredentials />
      </Box>
    </Box>
  );
}
