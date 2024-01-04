const mongoose = require('mongoose');
const User = require('../models/User'); // Make sure the path is correct

// Update the MongoDB connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/fitnessDB';

async function seedDatabase() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');

        const seedData = [
            { username: 'user1', password: 'password1' },
            { username: 'user2', password: 'password2' },
            // Add more seed data as needed
        ];

        console.log('Inserting seed data...');
        await User.insertMany(seedData);
        console.log('Seed data inserted successfully');

        // Close the MongoDB connection after seeding
        await mongoose.connection.close();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
}

// Run the seeding function
seedDatabase();
