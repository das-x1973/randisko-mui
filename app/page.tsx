// app/page.tsx
import React from "react";
import { Container, Typography, Button, Link } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to Randisko!
      </Typography>
      <Button variant="contained" color="primary">
        Get Started
      </Button>
      <Link href='/'>Linka</Link>
    </Container>
  );
}
