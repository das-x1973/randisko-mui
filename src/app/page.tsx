// app/page.tsx


import React from 'react';
import { Container, Box, Typography, Link } from "@mui/material";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <Container>
        <Typography variant="h4" color="primary" align="center">Vitajte v Randisku</Typography>
        <Typography variant="h6" align="center">
          Na zoznamovanie sa musíte <Link href="/auth/prihlasenie" color="secondary">prihlásiť</Link>,
        </Typography>
        <Typography variant="h6" align="center">
          alebo ak ste tu prvý krát, tak sa <Link href="/auth/registracia" color="secondary">registrujte</Link>.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h6" align="center">Tu budú inzeráty ktoré hľadá užívateľ:</Typography>
      <Box>
        <Typography variant="h6" align="center">{session.user!.name}</Typography>
      </Box>
      <Box>
        <Typography variant="h6" align="center">{session.user!.email}</Typography>
      </Box>
    </Container>
  );
}
