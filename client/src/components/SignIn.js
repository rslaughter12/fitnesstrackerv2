import React, { useState } from 'react';
import { TextField, Button, Container, Paper, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('User authenticated successfully');
        // Redirect to the dashboard upon successful authentication
        navigate('/dashboard');
      } else {
        console.error('Authentication failed');
        // Handle authentication failure (e.g., show error message)
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Network error:', error);
      // Handle network error
    }
  };

  return (
    <>
      <Link to='/' className='signin-button'>
        Return Home
      </Link>
      <Container component='main' maxWidth='xs'>
        <Paper
          elevation={3}
          style={{
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component='h1' variant='h5'>
            Sign In
          </Typography>
          <form style={{ width: '100%', marginTop: 10 }} onSubmit={handleFormSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='Username'
                  variant='outlined'
                  name='username'
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='Password'
                  variant='outlined'
                  type='password'
                  name='password'
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button type='submit' fullWidth variant='contained' color='primary' style={{ marginTop: 20 }}>
              Sign In
            </Button>
          </form>
          {error && (
            <Typography variant='body2' color='error' style={{ marginTop: 10 }}>
              {error}
            </Typography>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default SignIn;
