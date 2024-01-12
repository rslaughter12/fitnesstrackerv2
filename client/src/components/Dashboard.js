// Dashboard.js
import React from 'react';
import WorkoutCard from './WorkoutCard'; // Adjust the path based on your project structure

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <WorkoutCard/> {/* Call the MyComponent within Dashboard */}
    </div>
  );
};

export default Dashboard;
