import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 4,
        mt: 'auto',
        textAlign: 'center',
        borderColor: 'divider',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} ESS ERP. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;