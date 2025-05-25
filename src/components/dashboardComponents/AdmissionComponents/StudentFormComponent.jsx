import { Avatar, Box,Typography, Divider, TextField, Grid, } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { fetchStudentByIdData } from "../../../State/AdmissionState/Action";
import ApplicationTabComponent from "./ApplicationTabComponent";

function StudentFormComponent(studentId) {
    console.log(studentId);
    const StudentId = studentId.StudentId;
    const dispatch = useDispatch();
    const { data, total, loading } = useSelector(state => state.admission.student);
    console.log(data);
    
    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, newValue ) => {
        setTabValue(newValue);
    }
    
    useEffect(() => {
        dispatch(fetchStudentByIdData(StudentId));
    }, [dispatch, StudentId]);
    useEffect(() => {
        console.log('Fetched data:', data);
    }, [data]);
    return (
        <div style={{ paddingTop: 16, width: '1073px' }}>
            <Box>
            <Divider
            sx={{
                borderBottom: "1px solid black", // Solid black line
            }}
            />
            <Typography 
            variant="h4"
            component="h4"
            sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', mb: 3, color: 'green'}}
            >
            Applicant Details
            </Typography>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }}>
                    <Grid item xs={12} sm={6}>
                    <Typography>Application Number</Typography>
                       <TextField
                        variant="filled"                
                        value={data[0]?.ApplicationNumber || ''}
                        InputProps={{ readOnly: true }}   
                        sx={{
                            '& .MuiInputBase-input': {
                            fontWeight: 'bold',           
                            color: 'black',               
                            },
                            '& .MuiInput-underline:before': {
                            borderBottomColor: 'black',   
                            },
                            width: '250px', maxWidth: '100%'
                        }}
                        />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt:1}}>
                    <Grid item xs={12} sm={6}>
                       <Typography>First Name</Typography>
                       <TextField
                        variant="filled"                
                        value={data[0]?.Fname || ''}
                        InputProps={{ readOnly: true }}   
                        sx={{
                            '& .MuiInputBase-input': {          
                            color: 'black',               
                            },
                            '& .MuiInput-underline:before': {
                            borderBottomColor: 'black',   
                            },
                            width: '250px', maxWidth: '100%'
                        }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Middle Name</Typography>
                        <TextField
                            variant="filled"                
                            value={data[0]?.Mname || ''}
                            InputProps={{ readOnly: true }}   
                            sx={{
                                '& .MuiInputBase-input': {          
                                color: 'black',               
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',   
                                },
                                width: '250px', maxWidth: '100%'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Last Name</Typography>
                        <TextField
                            variant="filled"                
                            value={data[0]?.Lname || ''}
                            InputProps={{ readOnly: true }}   
                            sx={{
                                '& .MuiInputBase-input': {          
                                color: 'black',               
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',   
                                },
                                width: '250px', maxWidth: '100%'
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt:1}}>
                    <Grid item xs={12} sm={6}>
                        <Typography>Gender</Typography>
                        <TextField
                            variant="filled"                
                            value={data[0]?.Gender || ''}
                            InputProps={{ readOnly: true }}   
                            sx={{
                                '& .MuiInputBase-input': {          
                                color: 'black',               
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',   
                                },
                                width: '250px', maxWidth: '100%'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Date of Birth</Typography>
                        <TextField
                            variant="filled"                
                            value={dayjs(data.DateCreated).format('MM-DD-YYYY') || ''}
                            InputProps={{ readOnly: true }}   
                            sx={{
                                '& .MuiInputBase-input': {          
                                color: 'black',               
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',   
                                },
                                width: '250px', maxWidth: '100%'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Place of Birth</Typography>
                        <TextField
                            variant="filled"                
                            value={data[0]?.PlaceOfBirth || ''}
                            InputProps={{ readOnly: true }}   
                            sx={{
                                '& .MuiInputBase-input': {          
                                color: 'black',               
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',   
                                },
                                width: '250px', maxWidth: '100%'
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt:1}}>
                    <Grid item xs={12} sm={6}>
                        <Typography>Campus</Typography>
                        <TextField
                            variant="filled"                
                            value={data[0]?.CampusName || ''}
                            InputProps={{ readOnly: true }}   
                            sx={{
                                '& .MuiInputBase-input': {          
                                color: 'black',               
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',   
                                },
                                width: '250px', maxWidth: '100%'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Division</Typography>
                        <TextField
                            variant="filled"                
                            value={data[0]?.DivName || ''}
                            InputProps={{ readOnly: true }}   
                            sx={{
                                '& .MuiInputBase-input': {          
                                color: 'black',               
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',   
                                },
                                width: '250px', maxWidth: '100%'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Level</Typography>
                        <TextField
                            variant="filled"                
                            value={data[0]?.LevelName || ''}
                            InputProps={{ readOnly: true }}   
                            sx={{
                                '& .MuiInputBase-input': {          
                                color: 'black',               
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',   
                                },
                                width: '250px', maxWidth: '100%'
                            }}
                        />
                    </Grid>
                    {data[0]?.StrandId !== null && (
                        <Grid item xs={12} sm={6}>
                            <Typography>Strand</Typography>
                            <TextField
                            variant="filled"
                            value={data[0]?.StrandName || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                            />
                        </Grid>
                    )}
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt:1}}>
                    <Grid item xs={12} sm={6}>
                        <Typography>Nationality</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.NationalityName || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                            />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Religion</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.ReligionName || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            </Box>
            <Box sx={{ pt:2}}>
            <Divider
            sx={{
                borderBottom: "1px solid black", // Solid black line
            }}
            />
            <Typography 
            variant="h4"
            component="h4"
            sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', mb: 3, color: 'green'}}
            >
            Parents Details
            </Typography>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar
                            sx={{
                            bgcolor: 'green',
                            boxShadow: '0 4px 8px rgba(0, 128, 0, 0.5)',
                            width: 36,
                            height: 36,
                            }}
                        >
                        <InfoIcon sx={{ color: 'white' }} />
                        </Avatar>
                        <Typography 
                        variant="h6"
                        component="h6"
                        sx={{ color: 'green'}}
                        >
                            Father's Information
                        </Typography>
                    </Box>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt:1}}>
                    <Grid item xs={12} sm={6}>
                        <Typography>First Name</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.F_Fname || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Middle Name</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.F_Mname || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Last Name</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.F_Lname || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt:1}}>
                    <Grid item xs={12} sm={6}>
                        <Typography>Email</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.FathersEmail || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Mobile Number</Typography>
                         <TextField
                            variant="filled"
                            value={data[0]?.FathersPhone || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Occupation</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.FathersOccupation || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt: 2}}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar
                            sx={{
                            bgcolor: 'green',
                            boxShadow: '0 4px 8px rgba(0, 128, 0, 0.5)',
                            width: 36,
                            height: 36,
                            }}
                        >
                        <InfoIcon sx={{ color: 'white' }} />
                        </Avatar>
                        <Typography 
                        variant="h6"
                        component="h6"
                        sx={{ color: 'green'}}
                        >
                            Mother's Information
                        </Typography>
                    </Box>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt:1}}>
                    <Grid item xs={12} sm={6}>
                        <Typography>First Name</Typography>
                       <TextField
                            variant="filled"
                            value={data[0]?.M_Fname || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Middle Name</Typography>
                       <TextField
                            variant="filled"
                            value={data[0]?.M_Mname || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Last Name</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.M_Lname || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt:1}}>
                    <Grid item xs={12} sm={6}>
                        <Typography>Email</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.MothersEmail || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Mobile Number</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.MothersPhone || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Occupation</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.MothersOccupation || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            </Box>
            <Box sx={{ pt: 2}}>
                <Divider
                sx={{
                    borderBottom: "1px solid black", // Solid black line
                }}
                />
                <Typography 
                variant="h4"
                component="h4"
                sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', mb: 3, color: 'green'}}
                >
                Contact Person Details
                </Typography>
                <Box>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt:1}}>
                    <Grid item xs={12} sm={6}>
                        <Typography>First Name</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.C_Fname || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Middle Name</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.C_Mname || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Last Name</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.C_Lname || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt:1}}>
                    <Grid item xs={12} sm={6}>
                        <Typography>Relationship</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.CPRelationship || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Mobile Phone Number</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.MobilePhoneNo || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Home Phone Number</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.HomePhoneNo || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    </Grid>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, }} sx={{ pt:1}}>
                    <Grid item xs={12} sm={6}>
                        <Typography>Email</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.ContactPersonEmail || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography>Present Address</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.CPPresentAddress || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                     <Grid item xs={12} sm={6}>
                        <Typography>Home #, Unit, Street</Typography>
                        <TextField
                            variant="filled"
                            value={data[0]?.HomeStreetAddress || ''}
                            InputProps={{ readOnly: true }}
                            sx={{
                                '& .MuiInputBase-input': {
                                color: 'black',
                                },
                                '& .MuiInput-underline:before': {
                                borderBottomColor: 'black',
                                },
                                width: '250px',
                                maxWidth: '100%',
                            }}
                        />
                    </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ pt: 2}}>
                <Divider
                    sx={{
                        borderBottom: "1px solid black", // Solid black line
                    }}
                />
                <Typography 
                    variant="h4"
                    component="h4"
                    sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)', mb: 3, color: 'green'}}
                    >
                    Other Information
                </Typography>
                <Box>
                    <ApplicationTabComponent studentId={studentId} />
                </Box>
                
            </Box>
        </div>
    );
}
export default StudentFormComponent;    