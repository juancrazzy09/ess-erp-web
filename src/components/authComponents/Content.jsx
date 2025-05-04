import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Content() {
  return (
    <Stack
      sx={{
        flexDirection: 'column',
        alignSelf: 'center',
        gap: 4,
        maxWidth: { xs: '100%', sm: 450 },
        width: '100%',
        px: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/src/assets/img/seton logo.png"
          alt="Logo"
          sx={{
            width: { xs: 200, sm: 300, md: 400, lg: 450 },
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <Typography
          component="h1"
          variant="h4"
          sx={{
            fontWeight: 'medium',
            mt: 2,
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.25rem' },
            textAlign: 'center',
            color: 'green'
          }}
        >
          Welcome to Elizabeth Seton School
        </Typography>
      </Box>
    </Stack>
  );
}