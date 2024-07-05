// app/auth/registracia/page.tsx

import { Box, Typography, Divider } from '@mui/material';
import ButtonGoogle from '@/src/app/auth/components/ButtonGoogle';
import ButtonFacebook from '@/src/app/auth/components/ButtonFacebook';
import ButtonInstagram from '@/src/app/auth/components/ButtonInstagram';
import ButtonX from '@/src/app/auth/components/ButtonX';
import ButtonEmail from '@/src/app/auth/components/ButtonEmail';

export default function RegisterPage() {
  return (
    <Box sx={{ textAlign: 'center', width: '100%' }}>
      <Typography variant="h6" color="primary" gutterBottom>
        Na registráciu do Randiska môžete použiť svoj účet:
      </Typography>
      <Box display="flex" flexDirection="column" gap={2} alignItems="center">
        <ButtonGoogle />
        <ButtonFacebook />
        <ButtonInstagram />
        <ButtonX />
        <Box my={4} width="100%">
          <Divider sx={{ borderColor: 'pink' }}>
            <Typography variant="body1" color="primary">
              alebo klasický email:
            </Typography>
          </Divider>
        </Box>
        <ButtonEmail />
      </Box>
    </Box>
  );
}
