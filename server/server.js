const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/fitnessDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Define schema
const userSchema = new mongoose.Schema({
  firstName: String, // Updated schema with firstName
  username: String,
  password: String,
  workouts: [{ date: Date, workoutTypes: [String], formsOfWorkout: [String] }]
});

const User = mongoose.model('User', userSchema);

// Example registration route
app.post('/register', async (req, res) => {
  try {
    const { firstName, username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user using the User model with the generated userId
    const newUser = new User({
      firstName,
      username,
      password,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Example login route
app.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ username, password });

    if (user) {
      res.status(200).json({ message: 'User authenticated successfully' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Workout route without tokens
app.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = await User.findOne({ username, password });

    if (user) {
      console.log('User authenticated successfully:', user);
      res.status(200).json({ message: 'User authenticated successfully' });
    } else {
      console.log('Invalid username or password:', username);
      res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error during sign-in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/users/:username/workouts', async (req, res) => {
  try {
    const { username } = useParams();
    const { date, workoutTypes, formsOfWorkout } = req.body;

    // Save the workout data to the user's document in the database
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Assuming workouts is an array field in your user schema
    user.workouts.push({
      date,
      workoutTypes,
      formsOfWorkout,
    });

    await user.save();

    res.status(201).json({ message: 'Workout data added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
