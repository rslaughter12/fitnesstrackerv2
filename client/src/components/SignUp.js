import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Change import

const SignUp = () => {
  const navigate = useNavigate(); // Change the history to navigate

  const [formData, setFormData] = useState({
    firstName: '',
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    console.log('Form data:', formData);

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log('Fetch response:', response);

      if (response.ok) {
        console.log('User registered successfully');
        // Redirect to /dashboard upon successful registration
        navigate('/dashboard'); // Change to useNavigate
      } else {
        console.error('Error registering user');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  return (
    <>
      <Link to="/" className="signin-button">
        Return Home
      </Link>
      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form style={{ width: '100%', marginTop: 10 }} onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  variant="outlined"
                  name="username"
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }}>
              Sign Up
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default SignUp;
