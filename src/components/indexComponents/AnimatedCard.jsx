import React , {useState} from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedCard = ({ direction, title, content, scrollDir, image }) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  const variants = {
    hiddenLeft: { x: -200, opacity: 0, transition: { duration: 0.6 } },
    hiddenRight: { x: 200, opacity: 0, transition: { duration: 0.6 } },
    hiddenTop: { y: -200, opacity: 0, transition: { duration: 0.6 } },
    hiddenBottom: { y: 200, opacity: 0, transition: { duration: 0.6 } },
    visible: { x: 0, y: 0, opacity: 1, transition: { duration: 0.8 } },
  };
  
  const getInitialVariant = () => {
    switch (direction) {
      case 'left': return 'hiddenLeft';
      case 'right': return 'hiddenRight';
      case 'top': return 'hiddenTop';
      case 'bottom': return 'hiddenBottom';
      default: return 'hiddenLeft';
    }
  };
  
  const getVariant = () => {
    if (!inView && scrollDir === 'up') {
      return getInitialVariant();
    }
    return inView ? 'visible' : getInitialVariant();
  };
  const [isHovered, setIsHovered] = useState(false);
  const [showFull, setShowFull] = useState(false);
  return (
    <motion.div
    ref={ref}
    initial={getInitialVariant()}
    animate={getVariant()}
    variants={variants}
    onHoverStart={() => setIsHovered(true)}
    onHoverEnd={() => setIsHovered(false)}
    whileHover={{
      scale: 1.05,
      zIndex: 10,
    }}
    layout
    transition={{ layout: { duration: 0.4, type: 'spring' } }}
    style={{
      width: '450px',
      mx: 'auto',
      cursor: 'pointer',
    }}
  >
    <Card sx={{ height: '100%' }}>
      {image && (
        <Box
          sx={{
            mb: 2,
            width: '100%',
            height: '250px',
            overflow: 'hidden',
            borderRadius: 2,
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      )}
      <CardContent>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: showFull ? 'unset' : 1,
          WebkitBoxOrient: 'vertical',
          transition: 'all 0.3s ease',
        }}
      >
        {content}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: 'primary.main',
          cursor: 'pointer',
          mt: 1,
          fontWeight: 500,
          userSelect: 'none',
        }}
        onClick={() => setShowFull(prev => !prev)}
      >
        {showFull ? 'See Less' : 'See More'}
      </Typography>
    </CardContent>
    </Card>
  </motion.div>
  );
};

export default AnimatedCard;
