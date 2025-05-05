import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import MenuIcon from '@mui/icons-material/Menu'; // For mobile menu icon

function SideCarousel() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = ['Home', 'About', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ width: '100%', }}> {/* <-- just 10px padding top here */}
    {/* Mobile Drawer Toggle Button */}
    <IconButton 
      sx={{ display: { sm: 'none' }, position: 'absolute', top: 20, left: 20 }}
      onClick={handleDrawerToggle}
    >
      <MenuIcon />
    </IconButton>

    <Box
      sx={{
        py: 1,
        flexGrow: 1,
        maxWidth: '130vw',
        maxHeight: '110vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: 'url(/src/assets/img/2178148-scaled.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        dynamicHeight={false}
      >
        {['news1.png', 'news2.png', 'news3.png', 'news4.png'].map((img, index) => (
          <div key={index}>
            <img
              src={`/src/assets/img/${img}`}
              alt={`News ${index + 1}`}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '60vh',
                objectFit: 'contain',
              }}
            />
          </div>
        ))}
      </Carousel>
    </Box>
  </Box>
);
}

export default SideCarousel;