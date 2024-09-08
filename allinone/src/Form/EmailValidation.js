// src/EmailValidation.js
import React, { useState } from 'react';

const EmailValidation = (props) => {
    const [error, setError] = useState('');
    const validateEmail = (email) => {
        // Simple regex for basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e) => {
        const newEmail = e.target.value;
        props.getdata["Email"] = {"Email":newEmail,"IsValid":0};

        if (newEmail === '') {
            setError('Email cannot be empty');
        } else if (!validateEmail(newEmail)) {
            setError('Invalid email format');
        } else {
            setError('');
            props.getdata["Email"] = {"Email":newEmail,"IsValid":1};
        }
    };

    return (
        <div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    // type="email"
                    onChange={handleChange}
                    placeholder="Enter your email"
                />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default EmailValidation;
