import React from 'react';
import { Paper, Typography, Stack, Box } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { fetchApplicantStatusData } from '../../../State/AdmissionState/Action';

export default function ApplicantStatusBar({ pendingCount, ongoingCount }) {
  
  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4,
        flexWrap: 'wrap',
      }}
    >
      <StatusItem
        label="Pending Applicants"
        count={pendingCount}
        icon={<HourglassEmptyIcon color="warning" />}
        color="orange"
      />
      <StatusItem
        label="Ongoing Applicants"
        count={ongoingCount}
        icon={<PersonOutlineIcon color="primary" />}
        color="blue"
      />    
    </Paper>
  );
}

function StatusItem({ label, count, icon }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
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
