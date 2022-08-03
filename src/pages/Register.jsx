import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from "react-router-dom"
import { Alert } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { register, reset } from "../features/auth/authSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://backend-firebase777.web.app">
        Suresh__sk
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const Register = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isError, isSucces, isLoadind,
    message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      alert(message)
    }
    if(isSucces || user){
      navigate("/")
     }
     dispatch(reset())

  },[user , isError , isSucces ,navigate,dispatch,message])

  const [file, setFile] = useState(null)
  const [Error, setError] = React.useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const logdata = {
      name : data.get("name"),
      email: data.get('email'),
      password: data.get('password'),
      file: data.get('file'),
    };
    dispatch(register(logdata))
  };


  const ErrorClass = () => {
    return (
      <>
        <Alert onClose={() => setError(false)} severity="error">{message ?  message :  "This is an error alert — check it out register form!"}</Alert>
      </>
    )
  }

  if(isLoadind){
    return (
      <Box sx={{ display: "flex", height: "500px", alignItems: 'center', justifyContent: "center" }}>
        <CircularProgress sx={{fontSize : 50 }}/>
      </Box>
    );
   }

  return (
    <ThemeProvider theme={theme}>
      {
        Error && ErrorClass()
      }
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOpenIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="User Name"
              name="name"
              autoComplete="text"
              autoFocus
            />

            {file &&
              <Box sx={{
                width: 100,
                height: 100,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${URL.createObjectURL(file)})`,
                mb: 4,
                mt: 4,
                borderRadius: 3
              }} />
            }

            <label htmlFor='file' style={{ display: "flex", alignItems: "center" , cursor : "pointer"}}>
              <PhotoCamera  sx={{color : "gray", mt : 1}} /> <Typography sx={{color : "gray", mt : 1,ml : 1}}>Add Image</Typography>
    
            </label>
            <input type="file" name="file"
              id="file" style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
  
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>

            <Grid container>
              <Grid item>
                <NavLink to="/login" style={{ textDecoration: "none", color: "rgb(12, 130, 209)" }}>
                  <Typography variant="body2">
                    {"You have an account? Go Login"}
                  </Typography>
                </NavLink>
              </Grid>
            </Grid>

          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default Register