import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Typography, Container } from '@mui/material';

const events = [
  { title: 'Parent-Teacher Conference', date: '2025-05-10' },
  { title: 'Grade School Recognition Day', date: '2025-05-15' },
  { title: 'High School Commencement', date: '2025-05-20' },
  { title: 'Club Culminating Activities', date: '2025-05-25' },
];

const UpcomingEvents = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: 'green', borderRadius: 2 }}>
      <Container sx={{ backgroundColor: 'white',}}>
        <Typography variant="h5" gutterBottom>
          Upcoming Events Calendar
        </Typography>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          events={events}
          height="auto"
        />
      </Container>
    </Box>
  );
};

export default UpcomingEvents;
