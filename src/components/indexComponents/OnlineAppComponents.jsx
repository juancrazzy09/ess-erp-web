import React, { useState, useEffect } from 'react';
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
    AlertTitle,
    Snackbar,
} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { 
    fetchCampusData, 
    fetchLevelData, 
    fetchDivisionData, 
    fetchStrandData,
    fetchNationalityData,
    fetchReligionData,
    fetchProvinceData,
    fetchMunicipalityData,
    fetchBarangayData,
    fetchOnlineApplicationFormData,
} from '../../State/OnlineApplication/Action';

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
    { key: 'StudentPic2x2', label: 'Picture 2x2 ID' },
    { key: 'StudentBirthCert', label: 'Birth Certificate' },
    { key: 'StudentBaptismal', label: 'Baptismal Certificate' },
    { key: 'GoodMoral', label: 'Good Moral Certificate' },
    { key: 'CurrentReportCard', label: 'Current Report Card' },
  ];


function OnlineAppComponents() {
    
    const dispatch = useDispatch();

    const campus = useSelector(state => state.dropdown.campus);
    const division = useSelector(state => state.dropdown.division);
    const level = useSelector(state => state.dropdown.level);
    const strand = useSelector(state => state.dropdown.strand);
    const nationality = useSelector(state => state.dropdown.nationality);
    const religion = useSelector(state => state.dropdown.religion);
    const province = useSelector(state => state.dropdown.province);
    const municipality = useSelector(state => state.dropdown.municipality);
    const barangay = useSelector(state => state.dropdown.barangay);
    useEffect(() => {
    dispatch(fetchCampusData());
    dispatch(fetchDivisionData());
    dispatch(fetchNationalityData());
    dispatch(fetchReligionData());
    dispatch(fetchProvinceData());
    }, [dispatch]);

    if (campus.error || division.error || level.error || strand.error || nationality.error || religion.error || province.error || municipality.error || barangay.error ) {
   return (
        <Box sx={{ color: 'red' }}>
            {campus.error && <div>Error loading campus: {campus.error}</div>}
            {division.error && <div>Error loading division: {division.error}</div>}
            {level.error && <div>Error loading level: {level.error}</div>} 
            {strand.error && <div>Error loading strand: {strand.error}</div>} 
            {nationality.error && <div>Error loading strand: {nationality.error}</div>} 
            {religion.error && <div>Error loading religion: {religion.error}</div>} 
            {province.error && <div>Error loading province: {province.error}</div>} 
            {municipality.error && <div>Error loading municipality: {municipality.error}</div>} 
            {barangay.error && <div>Error loading barangay: {barangay.error}</div>} 
        </Box>
        );
    }
    const [selectedCampus, setSelectedCampus] = useState(null);
    const campusOption = {
        options: campus.data,
        getOptionLabel: (option) => option.CampusName,
    };
    const [selectedDivision, setSelectedDivision] = useState(null);
    const divisionOption = {
        options: division.data,
        getOptionLabel: (option) => option.DivName,
    };
    const handleDivisionChange = (event, newValue) => {
    setSelectedDivision(newValue);
    setFormData((prev) => ({
        ...prev,
        DivId: newValue?.DivId || 0
    }));
    if (newValue?.DivId) {
        console.log(newValue?.DivId);
        dispatch(fetchLevelData(newValue.DivId)); 
        }
    };
    const [selectedLevel, setSelectedLevel] = useState(null);
    const levelOption = {
        options: level.data,
        getOptionLabel: (option) => option.LevelName,
    };

    const handleStrandChange = (event, newValue) => {
        setSelectedLevel(newValue);
        setFormData((prev) => ({
            ...prev,
            LevelId: newValue?.LevelId || 0
        }));
        if(newValue?.LevelId){
            dispatch(fetchStrandData(newValue.LevelId));
        }
    }
    const [selectedStrand, setSelectedStrand ] = useState(null);
    const strandOption = {
        options: strand.data,
        getOptionLabel: (option) => option.StrandName,
    }
    const [selectedNationality, setSelectedNationality] = useState(null);
    const nationalityOption = {
        options: nationality.data,
        getOptionLabel: (option) => option.NationalityName,
    }
    const [selectedReligion, setSelectedReligion] = useState(null);
    const religionOption = {
        options: religion.data,
        getOptionLabel: (option) => option.ReligionName,
    }
    const [selectedProvince, setSelectedProvince] = useState(null);
    const provinceOption = {
        options: province.data,
        getOptionLabel: (option) => option.ProvinceName,
    };
    const handleProvinceChange = (event, newValue) => {
    setSelectedProvince(newValue);
    setFormData((prev) => ({
            ...prev,
            ProvinceId: newValue?.ProvinceId || 0
        }));   
    if (newValue?.ProvinceId) {
        console.log(newValue?.ProvinceId);
        dispatch(fetchMunicipalityData(newValue.ProvinceId)); 
        }
    };
    const [selectedMunicipality, setSelectedMunicipality] = useState(null);
    const municipalityOption = {
        options: municipality.data,
        getOptionLabel: (option) => option.MunicipalityName,
    };
    const handleMunicipalityChange = (event, newValue) => {
    setSelectedMunicipality(newValue);
    setFormData((prev) => ({
            ...prev,
            MunicipalityId: newValue?.MunicipalityId || 0
    }));    
    if (newValue?.MunicipalityId) {
        console.log(newValue?.MunicipalityId);
        dispatch(fetchBarangayData(newValue.MunicipalityId)); 
        }
    };
    const [selectedBarangay, setSelectedBarangay] = useState(null);
    const barangayOption = {
        options: barangay.data,
        getOptionLabel: (option) => option.BrgyName,
    };

    const [fileNames, setFileNames] = useState({});

    const handleFileChange = (event, key) => {
      const file = event.target.files[0];
      if (file) {
        setFileNames((prev) => ({ ...prev, [key]: file.name }));
        setFormData((prev) => ({
        ...prev,
            [key]: file, 
            }));
      }
    };


 const initialState = {
    Fname: '',
    Mname: '',
    Lname: '',
    Gender: 'male',
    DateOfBirth: null,
    PlaceOfBirth: '',
    CampusId: 0,
    DivId: 0,
    LevelId: 0,
    StrandId: 0,
    StudentType: 'New',
    NationalityId: 0,
    ReligionId: 0,
    ReligionName: '',
    F_Fname: '',
    F_Mname: '',
    F_Lname: '',
    FathersOccupation: '',
    FathersEmail: '',
    FathersPhone: '',
    M_Fname: '',
    M_Mname: '',
    M_Lname: '',
    MothersOccupation: '',
    MothersEmail: '',
    MothersPhone: '',
    C_Fname: '',
    C_Mname: '',
    C_Lname: '',
    ContactPersonEmail: '',
    EmailVerificationCode: '',
    CPRelationship: '',
    ProvinceId: 0,
    MunicipalityId: 0,
    BrgyId: 0,
    HomeStreetAddress: '',
    HomePhoneNo: '',
    MobilePhone: '',
    StudentPic2x2: null,
    StudentBirthCert: null,
    StudentBaptismal: null,
    GoodMoral: null,
    CurrentReportCard: null,
    ActiveStatus: 'P',
    };
  const [formData, setFormData] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});  
  const [openSuccess, setSuccessOpen] = React.useState(false);
  const [openFailed, setFailedOpen] = React.useState(false);
  const validate = (data) => {
    const errors = {};

    // ▶ required text fields
    if (!data.Fname.trim())  errors.Fname  = 'First name is required';
    if (!data.Lname.trim())  errors.Lname  = 'Last name is required';

    // ▶ date
    /* if (!data.DateOfBirth)   errors.DateOfBirth = 'Date of birth is required';

    // ▶ numeric (IDs must be chosen)
    if (data.CampusId === 0)      errors.CampusId      = 'Select a campus';
    if (data.DivId === 0)         errors.DivId         = 'Select a division';
    if (data.LevelId === 0)       errors.LevelId       = 'Select a level';
    if (data.NationalityId === 0) errors.NationalityId = 'Select a nationality';

    // ▶ e‑mails (basic regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.F_Fname.trim())  errors.F_Fname  = 'First name is required';
    if (!data.F_Mname.trim())  errors.F_Mname  = 'Middle name is required';
    if (!data.F_Lname.trim())  errors.F_Lname  = 'Last name is required';
    if (data.FathersEmail && !emailRegex.test(data.FathersEmail))
        errors.FathersEmail = 'Invalid e‑mail';
    if (data.MothersEmail && !emailRegex.test(data.MothersEmail))
        errors.MothersEmail = 'Invalid e‑mail';
    if (data.ContactPersonEmail && !emailRegex.test(data.ContactPersonEmail))
        errors.ContactPersonEmail = 'Invalid e‑mail';

    // ▶ phone (simple length check)
    if (data.MobilePhone && data.MobilePhone.length < 10)
        errors.MobilePhone = 'Phone must be at least 10 digits'; */

    // add more rules as you need …

    return errors;
    }; 


  const handleSubmitSuccClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccessOpen(false);
  };


  const handleSubmitFailedClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setFailedOpen(false);
  };


  const resetForm = () => setFormData(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };


  const handleDateChange = (newDate) => {   
    setFormData(prev => ({ ...prev, DateOfBirth: newDate }));
  };


    const handleSubmit = async () => {
    const errors = validate(formData);
    if (Object.keys(errors).length) {
        setFormErrors(errors);
        return;
    }
    setFormErrors({});

    // Build FormData instance
    const dataToSend = new FormData();

    // Append all fields (except files) as strings
    Object.entries(formData).forEach(([key, value]) => {
        if (
        value !== null &&
        !(value instanceof File) &&
        !(value instanceof Blob)
        ) {
        // For dates, convert to ISO string or suitable format if needed
        if (value instanceof Date) {
            dataToSend.append(key, value.toISOString());
        } else {
            dataToSend.append(key, value);
        }
        }
    });
    console.log(formData);
    // Append file fields separately (they are of type File or null)
    if (formData.StudentPic2x2) {
        dataToSend.append("StudentPic2x2", formData.StudentPic2x2);
    }
    if (formData.StudentBirthCert) {
        dataToSend.append("StudentBirthCert", formData.StudentBirthCert);
    }
    if (formData.StudentBaptismal) {
        dataToSend.append("StudentBaptismal", formData.StudentBaptismal);
    }
    if (formData.GoodMoral) {
        dataToSend.append("GoodMoral", formData.GoodMoral);
    }
    if (formData.CurrentReportCard) {
        dataToSend.append("CurrentReportCard", formData.CurrentReportCard);
    }

    // Now send dataToSend via fetch or your redux action
    // Example with fetch:
    /*
    const response = await fetch('/your-api-endpoint', {
        method: 'POST',
        body: dataToSend,
        // Note: Do NOT set Content-Type header, browser will set it automatically
    });
    const result = await response.json();
    if(response.ok) {
        setSuccessOpen(true);
        resetForm();
    } else {
        setFailedOpen(true);
    }
    */

    // Or if your fetchOnlineApplicationFormData can accept FormData:
    const res = await dispatch(fetchOnlineApplicationFormData(dataToSend));

    if (res.ok) {
        setSuccessOpen(true);
        resetForm();
    } else {
        setFailedOpen(true);
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
                <Typography
                    gutterBottom
                    sx={{
                    color: 'gray',
                    }}
                >
                    Please input the correct student information.
                </Typography>
            </Box>
                
            <Box sx={{ pt: 2 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6}>
                <Typography>First Name <span style={{ color: 'red' }}>*</span></Typography>
                <TextField 
                id="filled-basic" 
                variant="filled" 
                sx={{ width: '250px', maxWidth: '100%'}} 
                placeholder='Input first name' 
                name="Fname" 
                value={formData.Fname} 
                onChange={handleChange} 
                error={Boolean(formErrors.Fname)}
                helperText={formErrors.Fname} 
                 />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Middle Name</Typography>
                <TextField 
                id="filled-basic" 
                variant="filled" 
                sx={{ width: '250px', maxWidth: '100%'}} 
                placeholder='Input middle name' 
                name="Mname" 
                value={formData.Mname} 
                onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Last Name <span style={{ color: 'red' }}>*</span></Typography>
                <TextField 
                id="filled-basic" 
                variant="filled" 
                sx={{ width: '250px', maxWidth: '100%'}}
                placeholder='input last name' 
                name="Lname" 
                value={formData.Lname} 
                onChange={handleChange}
                error={Boolean(formErrors.Lname)}
                helperText={formErrors.Lname} 
                />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    name="Gender"
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    value={formData.Gender}
                    defaultValue="male"
                    onChange={(e) =>
                        setFormData((prev) => ({ ...prev, Gender: e.target.value }))
                    }
                >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DemoItem
                    label={
                        <span>
                        Date of Birth <span style={{ color: 'red' }}>*</span>
                        </span>
                    }
                    >
                    <DatePicker
                        value={formData.DateOfBirth}
                        onChange={handleDateChange}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                           /*  error={Boolean(formErrors.DateOfBirth)}
                            helperText={formErrors.DateOfBirth} */
                            fullWidth
                        />
                        )}
                    />
                    </DemoItem>
                </DemoContainer>
                </LocalizationProvider>
            </Grid>
             <Grid item xs={12} sm={6}>
                <Typography>Place of birth </Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder='Input place of birth' name="PlaceOfBirth" value={formData.PlaceOfBirth} onChange={handleChange}/>
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
                <Typography
                    gutterBottom
                    sx={{
                    color: 'gray',
                    }}
                >
                Please choose the correct campus and year level of student.
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
                            id="campus-auto-complete"
                            value={selectedCampus}
                            onChange={(event, newValue) => {
                              setSelectedCampus(newValue);
                              setFormData((prev) => ({
                                ...prev,
                                CampusId: newValue?.CampusId || '', // ✅ store campusId in formData
                                }));
                            }}
                            /* error={Boolean(formErrors.CampusId)}
                            helperText={formErrors.CampusId} */
                            isOptionEqualToValue={(option, value) => option.CampusId === value.CampusId}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                placeholder="Select Campus"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                    <>
                                        {campus.loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </>
                                    ),
                                }}
                                />
                            )}
                        />

                    </Grid>
                    <Grid item sx={{ width: '270px', maxWidth: '100%' }}>
                        <Typography>
                            Division <span style={{ color: 'red' }}>*</span>
                        </Typography>
                        <Autocomplete
                        {...divisionOption}
                        id="division-auto-complete"
                        value={selectedDivision}
                        onChange={handleDivisionChange}
                        isOptionEqualToValue={(option, value) => option.DivId === value.DivId}
                        renderInput={(params) => (
                            <TextField
                            {...params}
                            variant="standard"
                            placeholder="Select Division"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                <>
                                    {division.loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
                                ),
                            }}
                            />
                        )}
                        />
                    </Grid>
                    <Grid item sx={{ width: '270px', maxWidth: '100%' }}>
                        <Typography>
                        Level <span style={{ color: 'red' }}>*</span>
                        </Typography>
                       <Autocomplete
                            {...levelOption}
                            id="campus-auto-complete"
                            value={selectedLevel}
                            onChange={handleStrandChange}
                            isOptionEqualToValue={(option, value) => option.LevelId === value.LevelId}
                            noOptionsText={level.loading ? 'Loading levels...' : 'No levels available. You need to select division first.'}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                placeholder="Select Level"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                    <>
                                        {level.loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </>
                                    ),
                                }}
                                />
                            )}
                        />
                    </Grid>
                    {selectedLevel?.LevelId === 15 && (
                    <Grid item sx={{ width: '270px', maxWidth: '100%' }}>
                        <Typography>Strand <span style={{ color: 'red' }}>*</span></Typography>
                        <Autocomplete
                        {...strandOption}
                        id="strand-autocomplete"
                        value={selectedStrand}
                        onChange={(event, newValue) => {
                             setSelectedStrand(newValue);
                             setFormData((prev) => ({
                                ...prev,
                                StrandId: newValue?.StrandId || 0
                             }));
                        }}
                        renderInput={(params) => (
                             <TextField
                            {...params}
                            variant="standard"
                            placeholder="Select Strand"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                <>
                                    {strand.loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
                                ),
                            }}
                            />
                        )}
                        />
                    </Grid>
                    )}
                    <Grid sx={{ width: '270px', maxWidth: '100%'}}>
                    <Typography>Nationality <span style={{ color: 'red' }}>*</span></Typography>
                        <Autocomplete
                        {...nationalityOption}
                        id="auto-complete"
                        value={selectedNationality}
                        onChange={(event, newValue) => {
                             setSelectedNationality(newValue);
                             setFormData((prev) => ({
                                ...prev,
                                NationalityId: newValue?.NationalityId || 0
                             }));
                        }}
                        renderInput={(params) => (
                         <TextField
                            {...params}
                            variant="standard"
                            placeholder="Select Nationality"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                <>
                                    {nationality.loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
                                ),
                            }}
                            />
                        )}
                        />
                    </Grid>
                    <Grid sx={{ width: '270px', maxWidth: '100%'}}>
                    <Typography>Religion <span style={{ color: 'red' }}>*</span></Typography>
                        <Autocomplete
                        {...religionOption}
                        id="auto-complete"
                        value={selectedReligion}
                         onChange={(event, newValue) => {
                             setSelectedReligion(newValue);
                             setFormData((prev) => ({
                                ...prev,
                                ReligionId: newValue?.ReligionId || 0
                             }));
                        }}
                        renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            placeholder="Select Religion"
                            InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                <>
                                    {religion.loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </>
                                ),
                            }}
                            />
                        )}
                        />
                    </Grid>
                    {selectedReligion?.ReligionId === 18 && (
                    <Grid item sx={{ width: '270px', maxWidth: '100%' }}>
                        <Typography>Input your religion <span style={{ color: 'red' }}>*</span></Typography>
                        <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder='input your religion' name="ReligionName" value={formData.ReligionName} onChange={handleChange}/>  
                    </Grid>
                    )}
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
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="input father's first name" name="F_Fname" value={formData.F_Fname} onChange={handleChange}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Middle Name <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}  placeholder="input father's middle name" name="F_Mname" value={formData.F_Mname} onChange={handleChange}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Last Name <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}  placeholder="input father's last name" name="F_Lname" value={formData.F_LName} onChange={handleChange}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Occupation <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="input father's occupation" name="FathersOccupation" value={formData.FathersOccupation} onChange={handleChange}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Email Address <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="input father's email" name="FathersEmail" value={formData.FathersEmail} onChange={handleChange}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Mobile Number <span style={{ color: 'red' }}>*</span></Typography>
                <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="input father's mobile number" name="FathersPhone" value={formData.FathersPhone} onChange={handleChange}/>
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
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="input mother's first name" name="M_Fname" value={formData.M_Fname} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Middle Name <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}  placeholder="input mother's middle name" name="M_Mname" value={formData.M_Mname} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Last Name <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}}  placeholder="input mother's last name" name="M_Lname" value={formData.M_LName} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Occupation <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="input mother's occupation" name="MothersOccupation" value={formData.MothersOccupation} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Email Address <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="input mother's email" name="MothersEmail" value={formData.MothersEmail} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Mobile Number <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="input mother's mobile number" name="MothersPhone" value={formData.MothersPhone} onChange={handleChange}/>
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
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="Input guardian's first name" name="C_Fname" value={formData.C_Fname} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Middle Name <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="Input guardian's middle name" name="C_Mname" value={formData.C_Mname} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Last Name <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="Input guardian's last name" name="C_Lname" value={formData.C_Lname} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Relationship <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="Input guardian's relationship to applicant" name="CPRelationship" value={formData.CPRelationship} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Email Address <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="Input guardian's email" name="ContactPersonEmail" value={formData.ContactPersonEmail} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box sx={{ width: '250px', maxWidth: '100%'}} >
                        <Typography>Click to Verify Email</Typography>
                        <Button variant="contained">Verify Email</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Email Verification Code <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="Input email verification code" name="EmailVerificationCode" value={formData.EmailVerificationCode} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Home Phone Number <span style={{ color: 'red' }}>*</span></Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="Input guardian's home phone number" name="HomePhoneNo" value={formData.HomePhoneNo} onChange={handleChange}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography>Mobile Number</Typography>
                    <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="Input guardian's mobile number" name="MobilePhone" value={formData.MobilePhone} onChange={handleChange}/>
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
                            {...provinceOption}
                            id="province-auto-complete"
                            value={selectedProvince}
                            onChange={handleProvinceChange}
                            isOptionEqualToValue={(option, value) => option.ProvinceId === value.ProvinceId}
                            renderInput={(params) => (
                                <TextField
                                {...params}
                                variant="standard"
                                placeholder="Select Province"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                    <>
                                        {province.loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        {params.InputProps.endAdornment}
                                    </>
                                    ),
                                }}
                                />
                            )}
                            />
                        </Grid>
                        <Grid sx={{ width: '250px', maxWidth: '100%'}}>
                            <Typography>Choose Municipality <span style={{ color: 'red' }}>*</span></Typography>
                            <Autocomplete
                                {...municipalityOption}
                                id="municipality-auto-complete"
                                value={selectedMunicipality}
                                onChange={handleMunicipalityChange}
                                isOptionEqualToValue={(option, value) => option.MunicipalityId === value.MunicipalityId}
                                noOptionsText={municipality.loading ? 'Loading levels...' : 'No municipality available. You need to select province first.'}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    variant="standard"
                                    placeholder="Select Municipality"
                                    InputProps={{
                                        ...params.InputProps,
                                        endAdornment: (
                                        <>
                                            {municipality.loading ? <CircularProgress color="inherit" size={20} /> : null}
                                            {params.InputProps.endAdornment}
                                        </>
                                        ),
                                    }}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid sx={{ width: '250px', maxWidth: '100%'}}>
                            <Typography>Choose Baranggay <span style={{ color: 'red' }}>*</span></Typography>
                            <Autocomplete
                                    {...barangayOption}
                                    id="barangay-auto-complete"
                                    value={selectedBarangay}
                                    onChange={(event, newValue) => {
                                        setSelectedBarangay(newValue);
                                        setFormData((prev) => ({
                                            ...prev,
                                            BrgyId: newValue?.BrgyId || 0
                                        }));
                                    }}
                                    noOptionsText={barangay.loading ? 'Loading levels...' : 'No barangay available. You need to select province and municipality first.'}
                                    renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        placeholder="Select Barangay"
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                            <>
                                                {barangay.loading ? <CircularProgress color="inherit" size={20} /> : null}
                                                {params.InputProps.endAdornment}
                                            </>
                                            ),
                                        }}
                                        />
                                    )}
                                />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <Typography>Home #, Unit, Street <span style={{ color: 'red' }}>*</span></Typography>
                        <TextField id="filled-basic" variant="filled" sx={{ width: '250px', maxWidth: '100%'}} placeholder="ex. Block 1 Lot 1" name="HomeStreetAddress" value={formData.HomeStreetAddress} onChange={handleChange}/>
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
        <Button variant="contained" color="success" size="large" onClick={handleSubmit}>
            Submit
        </Button>
        </Box>
        <Container sx={{ pt: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{textAlign: "center" , color:"green"}}> 
                <span style={{color: "red" }}>*</span> We will communicate with you after 3-4 days of application provided the submitted documents are sufficient/complete.
            </Typography>
        </Container>
        <Snackbar open={openSuccess} autoHideDuration={4000} onClose={handleSubmitSuccClose}>
        <Alert
            onClose={handleSubmitSuccClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
        >
            Application Submitted!
        </Alert>
        </Snackbar>
        <Snackbar open={openFailed} autoHideDuration={4000} onClose={handleSubmitFailedClose}>
        <Alert
            onClose={handleSubmitFailedClose}
            severity="error"
            variant="filled"
            sx={{ width: '100%' }}
        >
            Applicant is already exist!
        </Alert>
        </Snackbar>
    </Box>
  );
}

export default OnlineAppComponents;
