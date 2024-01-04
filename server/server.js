const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/fitnessDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

// Define routes
// Example registration route
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Create a new user using the User model
        const newUser = new User({ username, password });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// start server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
