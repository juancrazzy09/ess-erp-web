import React, { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MenuIcon from '@mui/icons-material/Menu';

function EventCarousel() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const imagesLeft = ['news1.png', 'news2.png'];
  const imagesRight = ['news3.png', 'news4.png'];

  return (
    <Box>
      {/* Mobile Toggle Button */}
      <IconButton
        sx={{ display: { sm: 'none' }, position: 'absolute', top: 20, left: 20 }}
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>

      {/* Flex layout with 2 carousels */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 2,
          flexWrap: 'wrap',
          px: 2,
        }}
      >
        {/* Left Carousel */}
        <Box sx={{ flex: 1, minWidth: '300px' }}>
          <Typography
            variant="h5"
            sx={{ textAlign: 'center', mb: 1, fontWeight: 'bold' }}
          >
            Las Piñas Campus
          </Typography>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
            dynamicHeight={false}
          >
            {imagesLeft.map((img, index) => (
              <div key={index}>
                <img
                  src={`/src/assets/img/${img}`}
                  alt={`Left ${index + 1}`}
                  style={{
                    width: '100%',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </Carousel>
        </Box>

        {/* Right Carousel */}
        <Box sx={{ flex: 1, minWidth: '300px' }}>
          <Typography
            variant="h5"
            sx={{ textAlign: 'center', mb: 1, fontWeight: 'bold' }}
          >
            South Campus
          </Typography>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={4000}
            dynamicHeight={false}
          >
            {imagesRight.map((img, index) => (
              <div key={index}>
                <img
                  src={`/src/assets/img/${img}`}
                  alt={`Right ${index + 1}`}
                  style={{
                    width: '100%',
                    maxHeight: '60vh',
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
}
export default EventCarousel;
