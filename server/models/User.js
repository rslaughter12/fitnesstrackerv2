// models/User.js
const mongoose = require('mongoose');

// Define the schema for the Workout subdocument
const workoutSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    workoutTypes: {
        type: [String],
        required: true,
    },
    formsOfWorkout: {
        type: [String],
        required: true,
    },
    // Add other fields as needed
});

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // Embed the Workout subdocument within the User schema
    workouts: [workoutSchema],
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
