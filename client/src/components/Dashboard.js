import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Paper,
  Grid,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DeleteIcon from '@mui/icons-material/Delete';

const Dashboard = () => {
  const [selectedWorkoutTypes, setSelectedWorkoutTypes] = useState([]);
  const [selectedFormsOfWorkout, setSelectedFormsOfWorkout] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [addedWorkouts, setAddedWorkouts] = useState([]);

  const handleWorkoutTypeChange = (event) => {
    setSelectedWorkoutTypes(event.target.value);
  };

  const handleFormsOfWorkoutChange = (event) => {
    setSelectedFormsOfWorkout(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddWorkout = () => {
    const newWorkout = {
      date: selectedDate,
      workoutTypes: selectedWorkoutTypes,
      formsOfWorkout: selectedFormsOfWorkout,
    };

    setAddedWorkouts([...addedWorkouts, newWorkout]);

    setSelectedDate(new Date());
    setSelectedWorkoutTypes([]);
    setSelectedFormsOfWorkout([]);
  };

  const handleDeleteWorkout = (index) => {
    const updatedWorkouts = [...addedWorkouts];
    updatedWorkouts.splice(index, 1);
    setAddedWorkouts(updatedWorkouts);
  };

  return (
    <>
      <Link to='/' className='signin-button'>
        Return Home
      </Link>
      <Container>
        <Paper>
          <Grid container spacing={2} justifyContent='center'>
            <Grid item xs={12}>
              <Typography variant='h6'>Add Workout</Typography>
            </Grid>
            <Grid item xs={12}>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat='MM/dd/yyyy'
                isClearable
                showYearDropdown
                scrollableYearDropdown
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Workout Type'
                fullWidth
                select
                SelectProps={{
                  multiple: true,
                  value: selectedWorkoutTypes,
                  onChange: handleWorkoutTypeChange,
                  renderValue: (selected) => selected.join(', '),
                }}
              >
                <MenuItem value='Cardio'>
                  <Checkbox checked={selectedWorkoutTypes.includes('Cardio')} />
                  Cardio
                </MenuItem>
                <MenuItem value='Weightlifting'>
                  <Checkbox
                    checked={selectedWorkoutTypes.includes('Weightlifting')}
                  />
                  Weightlifting
                </MenuItem>
                <MenuItem value='yoga'>
                  <Checkbox checked={selectedWorkoutTypes.includes('yoga')} />
                  Yoga
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label='Excersise Type'
                fullWidth
                select
                SelectProps={{
                  multiple: true,
                  value: selectedFormsOfWorkout,
                  onChange: handleFormsOfWorkoutChange,
                  renderValue: (selected) => selected.join(', '),
                }}
              >
                <MenuItem value='Walking'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Walking')}
                  />
                  Walking
                </MenuItem>
                <MenuItem value='Jogging'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Jogging')}
                  />
                  Jogging
                </MenuItem>
                <MenuItem value='Running'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Running')}
                  />
                  Running
                </MenuItem>
                <MenuItem value='Stretching'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Stretching')}
                  />
                  Stretching
                </MenuItem>
                <MenuItem value='Breathing'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Breathing')}
                  />
                  Breathing
                </MenuItem>
                <MenuItem value='Core'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Core')}
                  />
                  Core
                </MenuItem>
                <MenuItem value='Squat'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Squat')}
                  />
                  Squat
                </MenuItem>
                <MenuItem value='Deadlift'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Deadlift')}
                  />
                  Deadlift
                </MenuItem>
                <MenuItem value='Bench Press'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Bench Press')}
                  />
                  Bench Press
                </MenuItem>
                <MenuItem value='Overhead Press (Shoulder Press)'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes(
                      'Overhead Press (Shoulder Press)'
                    )}
                  />
                  Overhead Press (Shoulder Press)
                </MenuItem>
                <MenuItem value='Barbell Row'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Barbell Row')}
                  />
                  Barbell Row
                </MenuItem>
                <MenuItem value='Pull-Ups'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Pull-Ups')}
                  />
                  Pull-Ups
                </MenuItem>
                <MenuItem value='Chin-Ups'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Chin-Ups')}
                  />
                  Chin-Ups
                </MenuItem>
                <MenuItem value='Dumbbell Rows'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Dumbbell Rows')}
                  />
                  Dumbbell Rows
                </MenuItem>
                <MenuItem value='Dumbbell Press (Flat, Incline, or Decline)'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes(
                      'Dumbbell Press (Flat, Incline, or Decline)'
                    )}
                  />
                  Dumbbell Press (Flat, Incline, or Decline)
                </MenuItem>
                <MenuItem value='Bicep Curl'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Bicep Curl')}
                  />
                  Bicep Curl
                </MenuItem>
                <MenuItem value='Hammer Curl'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Hammer Curl')}
                  />
                  Hammer Curl
                </MenuItem>
                <MenuItem value='Tricep Dips'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Tricep Dips')}
                  />
                  Tricep Dips
                </MenuItem>
                <MenuItem value='Tricep Pushdowns'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes(
                      'Tricep Pushdowns'
                    )}
                  />
                  Tricep Pushdowns
                </MenuItem>
                <MenuItem value='Lunges'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Lunges')}
                  />
                  Lunges
                </MenuItem>
                <MenuItem value='Romanian Deadlift (RDL)'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes(
                      'Romanian Deadlift (RDL)'
                    )}
                  />
                  Romanian Deadlift (RDL)
                </MenuItem>
                <MenuItem value='Leg Press'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Leg Press')}
                  />
                  Leg Press
                </MenuItem>
                <MenuItem value='Calf Raises'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Calf Raises')}
                  />
                  Calf Raises
                </MenuItem>
                <MenuItem value='Face Pulls'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Face Pulls')}
                  />
                  Face Pulls
                </MenuItem>
                <MenuItem value='Lat Pulldowns'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Lat Pulldowns')}
                  />
                  Lat Pulldowns
                </MenuItem>
                <MenuItem value='Front Squat'>
                  <Checkbox
                    checked={selectedFormsOfWorkout.includes('Front Squat')}
                  />
                  Front Squat
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant='contained'
                color='primary'
                onClick={handleAddWorkout}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Card style={{ marginTop: '20px' }}>
          <CardContent>
            <Typography variant='h6'>Added Workouts</Typography>
            {addedWorkouts.map((workout, index) => (
              <div key={index}>
                <p>Date: {workout.date.toDateString()}</p>
                <p>Workout Type: {workout.workoutTypes.join(', ')}</p>
                <p>Excersises: {workout.formsOfWorkout.join(', ')}</p>
                <IconButton
                  color='secondary'
                  aria-label='delete'
                  onClick={() => handleDeleteWorkout(index)}
                >
                  <DeleteIcon />
                </IconButton>
                <hr />
              </div>
            ))}
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Dashboard;
