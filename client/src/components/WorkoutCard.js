// WorkoutCard.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const WorkoutCard = () => {
    const { username } = useParams(); // Ensure that :username matches the parameter in the route
    console.log('Username:', username); // Add this line to check if username is correctly extracted
    const [formData, setFormData] = useState({
        date: '',
        workoutTypes: '',
        formsOfWorkout: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/users/${username}/workouts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Workout data added successfully');
            } else {
                console.log('Failed to add workout data');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            {/* Input fields */}
            <label>
                Date:
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                />
            </label>

            <label>
                Workout Types:
                <input
                    type="text"
                    name="workoutTypes"
                    value={formData.workoutTypes}
                    onChange={handleInputChange}
                />
            </label>

            <label>
                Forms of Workout:
                <input
                    type="text"
                    name="formsOfWorkout"
                    value={formData.formsOfWorkout}
                    onChange={handleInputChange}
                />
            </label>

            <button type="submit">Submit</button>
        </form>
    );
};

export default WorkoutCard;
