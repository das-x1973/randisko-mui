// app/auth/overitEmail/page.tsx

import { Box, Typography } from '@mui/material';

export default function VerifyRequestPage() {
  return (
    <Box textAlign="center" sx={{ mt: 4 }}>
      <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold' }}>
        Skontrolujte svoj email
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={2}>
        <Typography variant="body1" color="text.secondary" textAlign="center">
          Poslali sme aktivačný link na váš email. Kliknite na link v emaili, aby ste dokončili prihlásenie.
          Môžete zatvoriť túto kartu.
        </Typography>
      </Box>
    </Box>
  );
}
