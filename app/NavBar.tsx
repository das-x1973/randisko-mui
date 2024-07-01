// app/NavBar.tsx

'use client';

import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, Box } from '@mui/material';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const NavBar = () => {
  const [value, setValue] = useState(0);
  const { status } = useSession();

  const navigationActions = [
    { label: 'Domov', icon: <HomeIcon />, href: '/' },
    { label: 'Správy', icon: <ChatBubbleIcon />, href: '/spravy', authRequired: true },
    { label: 'Odhlásiť', icon: <LogoutIcon />, href: '/api/auth/signout', authRequired: true },
    { label: 'Prihlásiť', icon: <LoginIcon />, href: '/api/auth/signin', authRequired: false },
    { label: 'Registrovať', icon: <PersonAddIcon />, href: '/auth/registracia', authRequired: false },
  ];

  return (
    <Box sx={{ pb: 7 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {navigationActions.map((action, index) => (
            (status === 'authenticated' && action.authRequired !== false) ||
            (status !== 'authenticated' && action.authRequired !== true) ? (
              <BottomNavigationAction
                key={index}
                label={action.label}
                icon={action.icon}
                component={Link}
                href={action.href}
                showLabel
              />
            ) : null
          ))}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default NavBar;
