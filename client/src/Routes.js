import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';



const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}


export default AppRoutes;