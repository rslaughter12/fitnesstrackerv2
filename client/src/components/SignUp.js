import React from 'react';
import { TextField, Button, Container, Paper, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUp = () => {
        return (
          <>
         <Link Link to='/' className="signin-button">Return Home</Link>
            <Container component="main" maxWidth="xs">
              <Paper elevation={3} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">
                  Sign Up
                </Typography>
                <form style={{ width: '100%', marginTop: 10 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        name="firstName"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Username"
                        variant="outlined"
                        name="username"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type="password"
                        name="password"
                      />
                    </Grid>
                  </Grid>
                  <Link Link to='/'type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }}>
                    Sign Up
                  </Link>
                </form>
              </Paper>
            </Container>
          </>
        );
      };

export default SignUp;