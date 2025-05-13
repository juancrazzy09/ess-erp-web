import React, { useState } from 'react';
import 
{ 
    Typography, 
    Box, 
    Grid, 
    Avatar, 
    Divider, 
    Container, 
    TextField,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    Autocomplete,
    Button,
    Alert,
    AlertTitle
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const campus = [
    { title: 'Elizabeth Seton School - Las Piñas' },
    { title: 'Elizabeth Seton School - South' },
];
const levelData = {
  "Pre-Elementary": ["Nursery", "Kindergarten 1", "Kindergarten 2"],
  "Grade School": ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"],
  "Junior High School": ["Grade 7", "Grade 8", "Grade 9", "Grade 10"],
  "Senior High School": ["Grade 11"],
};
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const fileFields = [
    { key: 'idPicture', label: 'Picture 2x2 ID' },
    { key: 'birthCert', label: 'Birth Certificate' },
    { key: 'baptismal', label: 'Baptismal Certificate' },
    { key: 'goodMoral', label: 'Good Moral Certificate' },
    { key: 'reportCard', label: 'Current Report Card' },
  ];
const trackOptions = ["Science, Technology, Engineering and Mathematics ", "Humans and Social Sciences", "Accountancy, Business And Management"];
function OnlineAppComponents() {
    const [selectedDivision, setSelectedDivision] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);

    const divisionOptions = Object.keys(levelData);
    const levelOptions = selectedDivision ? levelData[selectedDivision] : [];
    const campusOption = {
        options: campus,
        getOptionLabel: (option) => option.title,
    };
    const [fileNames, setFileNames] = useState({});

    const handleFileChange = (event, key) => {
      const file = event.target.files[0];
      if (file) {
        setFileNames((prev) => ({ ...prev, [key]: file.name }));
      }
    };
  
  return (
    <Box sx={{ p: 2}}>
        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{textAlign: "center" , color:"green"}}> 
            Online Application
        </Typography>
    
        <Divider sx={{ borderBottomWidth: 2 }} />
        <Container sx={{ pt: 2 }}>
             <Alert severity="info" variant="outlined">
            <AlertTitle>Note</AlertTitle>
            Please input the valid information. <span style={{ color: 'red' }}>All (*) fields are required.</span>
        </Alert>
        </Container>
        <Container sx={{ pt: 2, }}>
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
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                    color: 'green',
                    }}
                >
                    Student Information
                </Typography>
            
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} >Center</Divider>
            <Box sx={{ pt: 2 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6}>
                <Typography>First Name <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Middle Name</Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Last Name <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    defaultValue="male"
                    name="row-radio-buttons-group"
                >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                    <DemoItem label="Date of Birth">
                    <DatePicker />
                    </DemoItem>
                </DemoContainer>
                </LocalizationProvider>
            </Grid>
            </Grid>
            </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 2}}>
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
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                    color: 'green',
                    }}
                >
                Campus Information
                </Typography>
            
            </Box> 
            <Grid item xs={12}>
                <Divider sx={{ borderBottomWidth: 2, my: 2 }} />
            </Grid>
            <Box sx={{ pt: 2 }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid sx={{ width: '270px', maxWidth: '100%'}}>
                        <Typography>Choose Campus <span style={{ color: 'red' }}>*</span></Typography>
                        <Autocomplete
                        {...campusOption}
                        id="auto-complete"
                        renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                        )}
                        />
                    </Grid>
                    <Grid item sx={{ width: '270px', maxWidth: '100%' }}>
                        <Typography>
                            Division <span style={{ color: 'red' }}>*</span>
                        </Typography><Autocomplete
                            id="division-autocomplete"
                            options={divisionOptions}
                            value={selectedDivision}
                            onChange={(event, newValue) => {
                                setSelectedDivision(newValue);
                                setSelectedLevel(null); // Reset level when division changes
                                setSelectedTrack(null);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="standard"/>
                            )}
                            />

                    </Grid>
                    <Grid item sx={{ width: '270px', maxWidth: '100%' }}>
                        <Typography>
                        Level <span style={{ color: 'red' }}>*</span>
                        </Typography>
                       <Autocomplete
                        id="level-autocomplete"
                        options={levelOptions}
                        value={selectedLevel}
                        onChange={(event, newValue) => setSelectedLevel(newValue)}
                        disabled={!selectedDivision}
                        renderInput={(params) => (
                            <TextField {...params} variant="standard"/>
                        )}
                        />
                    </Grid>
                     {selectedLevel === "Grade 11" && (
                       <Grid item sx={{ width: '270px', maxWidth: '100%' }}>
                        <Typography>Strand <span style={{ color: 'red' }}>*</span></Typography>
                        <Autocomplete
                            id="track-autocomplete"
                            options={trackOptions}
                            value={selectedTrack}
                            onChange={(event, newValue) => setSelectedTrack(newValue)}
                            renderInput={(params) => (
                            <TextField {...params} variant="standard"/>
                            )}
                        />
                        </Grid>
                    )}
                    <Grid sx={{ width: '270px', maxWidth: '100%'}}>
                    <Typography>Nationality <span style={{ color: 'red' }}>*</span></Typography>
                        <Autocomplete
                        {...campusOption}
                        id="auto-complete"
                        renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                        )}
                        />
                    </Grid>
                    <Grid sx={{ width: '270px', maxWidth: '100%'}}>
                    <Typography>Religion <span style={{ color: 'red' }}>*</span></Typography>
                        <Autocomplete
                        {...campusOption}
                        id="auto-complete"
                        renderInput={(params) => (
                        <TextField {...params} variant="standard" />
                        )}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Grid>
        </Box>
        </Container>
        <Divider sx={{ borderBottomWidth: 2 }}>
             <Typography variant="h5" fontWeight="bold" gutterBottom sx={{textAlign: "center" , color:"green"}}> 
                Parent Information
            </Typography>
        </Divider>
        <Container sx={{ pt: 2, }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                    color: 'green',
                    }}
                >
                Father's Information
                </Typography>
            </Box>
            <Grid item xs={12}>
                <Divider sx={{ borderBottomWidth: 2, my: 2 }} />
            </Grid>
            <Box sx={{ pt: 2 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6}>
                <Typography>First Name <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Middle Name <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Last Name <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Occupation <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Email Address <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Mobile Number <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
            </Grid>
            </Grid>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 2 }}>
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
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                    color: 'green',
                    }}
                >
                Mother's Maiden Information
                </Typography>
            
            </Box>
            <Divider sx={{ borderBottomWidth: 2, my: 2 }} />
            <Box sx={{ pt: 2 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6}>
                    <Typography>First Name <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Middle Name <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Last Name <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Occupation <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Email Address <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Mobile Number<span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
            </Grid>
            </Box>
        </Grid>
        </Container>
        <Divider sx={{ borderBottomWidth: 2, pt:2 }}>
             <Typography variant="h5" fontWeight="bold" gutterBottom sx={{textAlign: "center" , color:"green"}}> 
                Contact Person Information
            </Typography>
        </Divider>
        <Container sx={{ pt: 2, }}>
            <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={6}>
                    <Typography>First Name <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Middle Name <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Last Name <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Occupation <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Email Address <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ width: '250px', maxWidth: '100%'}} >
                        <Typography>Click to Verify Email</Typography>
                        <Button variant="contained">Verify Email</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Email Verification Code <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Home Phone Number <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Mobile Number</Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                </Grid>
                </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 2}}>
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
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                    color: 'green',
                    }}
                >
                Contact Person Address
                </Typography>
            </Box>
            <Divider sx={{ borderBottomWidth: 2 }} />
                <Box sx={{ pt: 2 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid sx={{ width: '250px', maxWidth: '100%'}}>
                            <Typography>Choose Province <span style={{ color: 'red' }}>*</span></Typography>
                            <Autocomplete
                            {...campusOption}
                            id="auto-complete"
                            renderInput={(params) => (
                            <TextField {...params} variant="standard" />
                            )}
                            />
                        </Grid>
                        <Grid sx={{ width: '250px', maxWidth: '100%'}}>
                            <Typography>Choose Municipality <span style={{ color: 'red' }}>*</span></Typography>
                            <Autocomplete
                            {...campusOption}
                            id="auto-complete"
                            renderInput={(params) => (
                            <TextField {...params} variant="standard" />
                            )}
                            />
                        </Grid>
                        <Grid sx={{ width: '250px', maxWidth: '100%'}}>
                            <Typography>Choose Baranggay <span style={{ color: 'red' }}>*</span></Typography>
                            <Autocomplete
                            {...campusOption}
                            id="auto-complete"
                            renderInput={(params) => (
                            <TextField {...params} variant="standard" />
                            )}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Typography>Home #, Unit, Street <span style={{ color: 'red' }}>*</span></Typography>
                        <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}/>
                    </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
        <Divider sx={{ borderBottomWidth: 2, pt:2 }}>
             <Typography variant="h5" fontWeight="bold" gutterBottom sx={{textAlign: "center" , color:"green"}}> 
                Attachments
            </Typography>
        </Divider>
        <Container sx={{ pt: 2, }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {fileFields.map(({ key, label }) => (
            <Grid key={key} sx={{ width: '250px', maxWidth: '100%' }}>
            <Typography>{label} <span style={{ color: 'red' }}>*</span></Typography>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload files 
                <VisuallyHiddenInput
                type="file"
                onChange={(e) => handleFileChange(e, key)}
                multiple={false}
                />
            </Button>
            {fileNames[key] && (
                <Box mt={1}>
                <Typography variant="body2" color="text.secondary">
                    Selected file: {fileNames[key]}
                </Typography>
                </Box>
            )}
            </Grid>
        ))}
        </Grid>
        <Divider sx={{ borderBottomWidth: 2, pt:2 }} />
        </Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
        <Button variant="contained" color="success" size="large">
            Submit
        </Button>
        </Box>
        <Container sx={{ pt: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{textAlign: "center" , color:"green"}}> 
                <span style={{color: "red" }}>*</span> We will communicate with you after 3-4 days of application provided the submitted documents are sufficient/complete.
            </Typography>
        </Container>
    </Box>
  );
}

export default OnlineAppComponents;
