import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 'auto', textAlign: 'center' }}>
      <Typography variant="body1">
        &copy; 2024 Amanogawa V2
      </Typography>
    </Box>
  );
};

export default Footer;
