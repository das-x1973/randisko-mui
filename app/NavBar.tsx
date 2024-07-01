// app/NavBar.tsx

'use client';

import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, Box } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const NavBar = () => {
  const [value, setValue] = useState(0);
  const { status, data: session } = useSession();

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
          <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} href="/" />
          {status === 'authenticated' ? (
            <>
              <BottomNavigationAction label="Messages" icon={<ChatBubbleIcon />} component={Link} href="/spravy" />
              <BottomNavigationAction label="Logout" icon={<ExitToAppIcon />} component={Link} href="/api/auth/signout" />
            </>
          ) : (
            <>
              <BottomNavigationAction label="Login" icon={<RestoreIcon />} component={Link} href="/api/auth/signin" />
              <BottomNavigationAction label="Register" icon={<FavoriteIcon />} component={Link} href="/auth/registracia" />
            </>
          )}
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default NavBar;
