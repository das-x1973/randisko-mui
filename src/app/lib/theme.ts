// lib/theme.ts

'use client'; 

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#ff4081',
    },
    text: {
      primary: '#000000',  
      secondary: '#757575',  
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
