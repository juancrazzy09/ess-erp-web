/* import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'; */
import MuiCard from '@mui/material/Card';
import 
{ 
    Typography, 
    Box, 
    Checkbox,
    Divider, 
    TextField,
    FormControl,
    FormLabel,
    FormControlLabel,
    Link,
    Button,
    Alert,
    Snackbar,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, SitemarkIcon } from './CustomIcons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchLoginData } from '../../State/AuthState/Action';
import { useDispatch } from 'react-redux';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function LoginCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = useState(false);
  
 /*  if(login.error){
    return(
      <Box sx= {{color: 'red'}}>
        {login.error && <div>Error loading login: {login.error}</div>}
      </Box>
    );
    
  } */

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const validateInputs =  () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };
  const [openSuccess, setSuccessOpen] = React.useState(false);
  const handleSubmitSuccClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccessOpen(false);
  };
  const loginRequest = async (email, password) => {
    const formData = {
      Email: email,
      Password: password
    };
    
    const res = await dispatch(fetchLoginData(formData));

    if (res.ok) {
      setSuccessOpen(true);
      console.log(res.data);
      const userRole = res.data.UserRole;
      console.log(userRole);
      console.log(res.data.Token);
      switch (userRole){
        case "admission":
          localStorage.setItem('token', res.data.Token);
          localStorage.setItem('userData', JSON.stringify(res));
          navigate('/admission/dashboard');
        default:
          null;
      } 
      
    } 
    else {

      setEmailError(true);
      setEmailErrorMessage('Wrong Email');
      setPasswordError(true);
      setPasswordErrorMessage('Wrong Password');
      return;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {
      const data = new FormData(event.currentTarget);
      const email = data.get('email');
      const password = data.get('password');
      loginRequest(email, password); 
    }
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <SitemarkIcon />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)', color: 'green' }}
      >
        Login 
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">Password</FormLabel>
           
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
         <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'baseline' }}
            >
              Forgot your password?
            </Link>
        <ForgotPassword open={open} handleClose={handleClose} />
        <Button type="submit" fullWidth variant="contained" onClick={validateInputs}>
          Sign in
        </Button>
      </Box>
      <Divider>or</Divider>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Google')}
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
      </Box>
      <Snackbar open={openSuccess} autoHideDuration={2000} onClose={handleSubmitSuccClose}>
      <Alert
          onClose={handleSubmitSuccClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
      >
        Login Successfully!
      </Alert>
      </Snackbar>
    </Card>
  );
}