import React, { useEffect, useState } from 'react';
import {
  Box,
  Modal,
  Typography,
  Button,
  Grid,
  Backdrop,
  Slide,
} from '@mui/material';
import AnimatedCard from './AnimatedCard';
import StudentRequirements from './StudentRequirements';
import OnlineApplication from './OnlineRequirements';


const cardData = [
  {
    title: 'View Student Requirements',
    component: <StudentRequirements />,
  },
  {
    title: 'View Online Application',
    component: <OnlineApplication  />,
  },
];


function StudentReqAndEnroll (){
  const [scrollDir, setScrollDir] = useState('down');
  const [modalOpen, setModalOpen] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY ? 'down' : 'up');
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, []);

  const handleCardClick = (card) => {
    setActiveCard(card);
    setModalOpen(true);
    setTimeout(() => setSlideIn(true), 10); // Delay to trigger slide-in
  };

  const handleClose = () => {
    setSlideIn(false);
    setTimeout(() => {
      setModalOpen(false);
      setActiveCard(null);
    }, 300); // Match Slide transition duration (300ms)
  };

  return (
     <Box
         sx={{
           py: 4,
           backgroundImage: 'url(/src/assets/img/background-1.jpg)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
         }}
       >
        <Grid container spacing={2} justifyContent="center" alignItems="stretch">
        {cardData.map((card, index) => (
          <Grid item xs={10} md={3} key={index}>
            <div onClick={() => handleCardClick(card)} style={{ cursor: 'pointer' }}>
              <AnimatedCard
                direction="top"
                title={card.title}
                content={card.content}
                enableSeemore = {false}
                bgImage= "/src/assets/img/modal_bg.png"
              />
            </div>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        BackdropProps={{
          style: { backgroundColor: 'transparent' },
          timeout: 300,
        }}
      >
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Slide in={slideIn} direction="down" mountOnEnter unmountOnExit>
            <Box
              sx={{
                width: { xs: '90%', md: 800 },
                borderRadius: 2,
             /*    boxShadow: 24, */
                display: 'flex',
                flexDirection: 'column',
                maxHeight: 550,
                bgcolor: 'background.paper', 
                overflow: 'hidden',
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  backgroundImage: 'url(/src/assets/img/2178148-scaled.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  p: 3,
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textShadow: `
                      -1px -1px 0 #000,
                      1px -1px 0 #000,
                      -1px 1px 0 #000,
                      1px 1px 0 #000
                    `,
                  }}
                >
                  {activeCard?.title}
                </Typography>
              </Box>

              {/* Scrollable content */}
              <Box
                sx={{
                  p: 4,
                  overflowY: 'auto',
                  flex: 1,
                  color: 'text.primary',
                }}
              >
                {activeCard?.component}
                <Box textAlign="right" mt={3}>
                  <Button onClick={handleClose} variant="contained">
                    Close
                  </Button>
                </Box>
              </Box>
            </Box>
          </Slide>
        </Box>
      </Modal>
      </Box>
  );
};

export default StudentReqAndEnroll;
