import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to your fitness tracker!</h1>
            <div className="button-container">
                <Link Link to='/signin' className="signin-button">Sign In</Link>
                <Link Link to='/signup'className="signup-button">Sign Up</Link>
            </div>
        </div>
    );
};

export default Welcome;
