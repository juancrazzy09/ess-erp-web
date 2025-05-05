import { Container, Box } from '@mui/material';
import React from 'react';

function StudentRequirements() {
  const boxes = [
    { label: 'preschoolreq', image: '/src/assets/img/preschoolreq.jpg' },
    { label: 'gradesandjuniorschoolreq', image: '/src/assets/img/gradesandjuniorschoolreq.jpg' },
    { label: 'seniorhsreq', image: '/src/assets/img/seniorhsreq.jpg' },
    { label: 'admissionreq', image: '/src/assets/img/admissionreq.jpg' },
    { label: 'forincomg1', image: '/src/assets/img/forincomg1.jpg' },
    { label: 'foreignreq', image: '/src/assets/img/foreignreq.jpg' },
  ];

  return (
    <Container maxWidth="lg">
      {boxes.map((item, index) => (
        <Box
          key={index}
          sx={{
            width: '100%',
            maxHeight: 300,
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={item.image}
            alt={item.label}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </Box>
      ))}
    </Container>
  );
}

export default StudentRequirements;
