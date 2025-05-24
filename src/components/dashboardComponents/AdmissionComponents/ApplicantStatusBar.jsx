import React, { useState } from 'react';
import {
  Paper, Typography, Stack, Box, Collapse, useMediaQuery
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import  GenerateTable from './GenerateTable';

export default function ApplicantStatusBar({ pendingCount, ongoingCount, enrolledCount, totalCount, onViewClick  }) {
  const [activeStatus, setActiveStatus] = useState(null);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm')); // true for mobile/tablet

  const handleItemClick = (status) => {
    setActiveStatus(prev => (prev === status ? null : status)); // toggle
  };

  return (
  <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: { xs: 1, sm: 2, md: 3 }, // Responsive horizontal padding
        py: { xs: 2, sm: 3 }, // Optional vertical padding for spacing
        width: '100%',
      }}
    >
     <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 3,
        mb: { xs: 2, sm: 3 },
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'row',
          md: 'row',
        },
        flexWrap: 'wrap', // allow wrapping on small widths
        justifyContent: {
          xs: 'center',
          sm: 'space-between',
        },
        alignItems: 'stretch',
        gap: 2,
        width: '100%',
        maxWidth: 900,
        mx: 'auto',
       }}
     >
        <StatusItem
          label="Pending Applicants"
          count={pendingCount}
          icon={<HourglassEmptyIcon color="error" />}
          onClick={() => handleItemClick("P")}
        />
        <StatusItem
          label="Ongoing Applicants"
          count={ongoingCount}
          icon={<PersonOutlineIcon color="warning" />}
          onClick={() => handleItemClick("O")}
        />
        <StatusItem
          label="Enrolled Students"
          count={enrolledCount}
          icon={<Groups2OutlinedIcon color="success" />}
          onClick={() => handleItemClick("Y")}
        />
        <StatusItem
          label="Total Count of Students"
          count={totalCount}
          icon={<PeopleAltOutlinedIcon color="primary" />}
          onClick={() => handleItemClick("O")}
        />
      </Paper>

      <Collapse in={!!activeStatus} timeout="auto" unmountOnExit sx={{ width: '100%', maxWidth: 1280 }}>
        <Box sx={{ width: '100%', maxWidth: 1280, mx: 'auto', mt: 2 }}>
          <GenerateTable status={activeStatus} onViewClick={onViewClick}/>
        </Box>
      </Collapse>
    </Box>
  );
}

function StatusItem({ label, count, icon, onClick }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      sx={{
        cursor: 'pointer',
        borderRadius: 2,
        p: 1.5,
        flex: {
          xs: '1 1 100%', // full width on small screens
          sm: '1 1 45%',  // two per row on small/medium
          md: '1 1 20%',  // four per row on desktop
        },
        minWidth: 200,
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      }}
      onClick={onClick}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 32 }}>
        {icon}
      </Box>
      <Stack>
        <Typography variant="h6">{count}</Typography>
        <Typography variant="body2" color="text.secondary">
          {label}
        </Typography>
      </Stack>
    </Stack>
  );
}
