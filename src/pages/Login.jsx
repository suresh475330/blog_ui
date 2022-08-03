import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useNavigate } from "react-router-dom"
import { Alert } from '@mui/material';
import { useState } from 'react';
import { login, reset } from "../features/auth/authSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
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

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isError, isSucces, isLoadind,
    message } = useSelector((state) => state.auth)


  const [Error, setError] = useState(false)

  useEffect(() => {
    if (isError) {
      alert(message)
    }
    if (isSucces || user) {
      navigate("/")
    }
    dispatch(reset())

  }, [user, isError, isSucces, navigate, dispatch, message])

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const logdata = {
      email: data.get('email'),
      password: data.get('password'),
    };
    if (!logdata.email || !logdata.password) {
      return setError(true)
    }

    dispatch(login(logdata))
  };

  const ErrorClass = () => {
    return (
      <>
        <Alert onClose={() => setError(false)} severity="error">{message ?  message :  "This is an error alert — check it out register form!"}</Alert>
      </>
    )
  }

  if (isLoadind) {
    return (
      <Box sx={{ display: "flex", height: "500px", alignItems: 'center', justifyContent: "center" }}>
        <CircularProgress sx={{ fontSize: 50 }} />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      {
        Error  && ErrorClass()
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus

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
              Login
            </Button>

            <Grid container>
              <Grid item>
                <NavLink to="/register" style={{ textDecoration: "none", color: "rgb(12, 130, 209)" }}>
                  <Typography variant="body2">
                    {"Don't have an account? Register"}
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

export default Login