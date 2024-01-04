// models/User.js
const mongoose = require('mongoose');

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
    // Add other fields as needed
});

// Create the User model
const User = mongoose.model('User', userSchema);

// Export the User model
module.exports = User;
