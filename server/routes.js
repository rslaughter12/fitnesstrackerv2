// routes.js
const express = require('express');
const User = require('./models/User');
const authenticateUser = require('./middleware/authentication');

const router = express.Router();

// Use the middleware for workout-related routes
router.use('/api/users/:username/workouts', authenticateUser);

// Route for adding a workout to a user
router.post('/api/users/:username/workouts', async (req, res) => {
    try {
        const username = req.params.username;
        const newWorkout = {
            date: new Date(),
            workoutTypes: req.body.workoutTypes,
            formsOfWorkout: req.body.formsOfWorkout,
            // Add other workout details as needed
        };

        const updatedUser = await User.findOneAndUpdate(
            { username },
            { $push: { workouts: newWorkout } },
            { new: true }
        );

        res.json(updatedUser.workouts); // Return the updated workouts array
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route for fetching workouts for a user
router.get('/api/users/:username/workouts', async (req, res) => {
    try {
        const username = req.params.username;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user.workouts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
