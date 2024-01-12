// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import WorkoutCard from './components/WorkoutCard';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user/:username/workout" element={<WorkoutCard />} />
            {/* Ensure that the :username parameter is passed down */}
        </Routes>
    );
};

export default AppRoutes;
