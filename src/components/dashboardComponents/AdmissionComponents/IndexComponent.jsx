import { 
  Box,
  Typography,
  Container,
  Alert,
 } from "@mui/material";
import ApplicantStatusBar from './ApplicantStatusBar';
import { useDispatch } from 'react-redux';
import { useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { fetchApplicationCountData } from "../../../State/AdmissionState/Action";
import StudentFormComponent from '../AdmissionComponents/StudentFormComponent'

const  IndexComponent = forwardRef((props, ref) => {
    const dispatch = useDispatch();
    const [pendingCount, setPendingCount] = useState(0);
    const [ongoingCount, setOngoingCount] = useState(0);
    const [enrolledCount, setEnrolledCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    const getApplicantsPendingCount = async () => {
        
        const res = await dispatch(fetchApplicationCountData());
        if (res.ok) {
            console.log(res);
            setPendingCount(res.data.PendingCount);
            setOngoingCount(res.data.OngoingCount);
            setEnrolledCount(res.data.EnrolledCount);
            setTotalCount(res.data.TotalCount);
            // handle success if needed
        } else {
            // handle error
            console.error('Failed to fetch applicants:');
        }
    }
    useEffect(() => {
    getApplicantsPendingCount();
  }, []);
  const mainRef = useRef();

  // Expose the width through the ref
  useImperativeHandle(ref, () => ({
    getMainWidth: () => mainRef.current?.offsetWidth || 0,
  }));
  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', px: 3, pt: 3 }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', mb: 3, color: 'green'}}
      >
        Welcome to Admission Dashboard
      </Typography>
    </Box>
    <Alert severity="warning" variant="outlined">
      Note: To monitor the online application, you may click the button to view the table.
    </Alert>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 3 }}>
       <Typography
        variant="h4"
        component="h4"
        sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', mb: 3, color: 'green'}}
      >
        Status of Online Application
      </Typography>
    </Box>
    <Box sx={{ px: 3 }}
    /* sx={{ display: 'flex', justifyContent: 'flex-start', px: 3, pt: 4 }} */
    >
      <ApplicantStatusBar 
        pendingCount={pendingCount} 
        ongoingCount={ongoingCount}  
        enrolledCount={enrolledCount}
        totalCount={totalCount}
      />
    </Box>
     
    </Container>
    
  );
});

export default IndexComponent;
