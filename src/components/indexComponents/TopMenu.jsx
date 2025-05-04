import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const SliderLogo = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '450px',
  height: 'auto',
  opacity: 0,
  animation: 'slideIn 2s ease-out forwards',
  animationDelay: '0.3s',
  [theme.breakpoints.down('sm')]: {
    maxWidth: '300px',
  }
}));

function TopMenu() {
  const [showLogo, setShowLogo] = useState(false);
  const logoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowLogo(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );

    if (logoRef.current) observer.observe(logoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row',
        },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4,
        px: { xs: 2, md: 6 },
        mt: 4,
        textAlign: {
          xs: 'center',
          md: 'left',
        },
        flexWrap: 'wrap'
      }}
    >
      {/* Text Section */}
      <Box sx={{ flex: 1, minWidth: 280 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: 'green',
            mb: 1,
            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.4rem' },
          }}
        >
          Welcome to Elizabeth Seton School
        </Typography>
        <Typography variant="body1">This is a Web-Based ERP.</Typography>
        <Typography variant="body1">For more inquiry.</Typography>
        <Button variant="contained" color="success" sx={{ mt: 2 }}>
          Enroll Now!
        </Button>
      </Box>

      {/* Logo Section */}
      <Box ref={logoRef} sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        {showLogo && (
          <SliderLogo
            src="/src/assets/img/seton logo.png"
            alt="Elizabeth Seton School Logo"
          />
        )}
      </Box>

      {/* Animation styles */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
}

export default TopMenu;
