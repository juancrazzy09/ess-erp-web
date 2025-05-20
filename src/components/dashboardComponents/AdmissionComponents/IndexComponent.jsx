import { Box, Typography } from "@mui/material";
import ApplicantStatusBar from './ApplicantStatusBar';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchApplicantStatusData } from "../../../State/AdmissionState/Action";
function IndexComponent() {
    const dispatch = useDispatch();
    const [pendingCount, setPendingCount] = useState(0);

    const getApplicantsPendingCount = async () => {
        const formData = {
            PageNumber: 1,
            PageSize: 10,
            //...filters,
        };
        
        const res = await dispatch(fetchApplicantStatusData(formData));
        if (res.ok) {
            const data = res.data?.data || [];
            const pending = data.filter(app => app.ActiveStatus === 'P').length;
            setPendingCount(pending)
            // handle success if needed
            console.log('Applicants fetched:', res.data);
        } else {
            // handle error
            console.error('Failed to fetch applicants:', res.error);
        }
    }
    useEffect(() => {
    getApplicantsPendingCount();
  }, []);
  return (
    <Box sx={{ px: 3, pt: 3 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', mb: 3 }}
      >
        Welcome to Admission Dashboard
      </Typography>

      <ApplicantStatusBar pendingCount={pendingCount} ongoingCount={7} />
    </Box>
  );
}

export default IndexComponent;
