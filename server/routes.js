// server/routes.js (Backend routes)
const express = require('express');
const User = require('./models/User');

const router = express.Router();

// Route for adding a workout to a user
router.post('/users/:userId/workouts', async (req, res) => {
    try {
        const userId = req.params.userId;
        const newWorkout = {
            date: new Date(),
            workoutTypes: req.body.workoutTypes,
            formsOfWorkout: req.body.formsOfWorkout,
            // Add other workout details as needed
        };

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $push: { workouts: newWorkout } },
            { new: true }
        );

        res.json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;