import React, { useState } from 'react';
import axios from 'axios';

const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('/api/signup', formData);
            alert('Signup successful! Please login.');

            window.location.href = '/login';
        } catch (error) {
            alert('Error signing up. Please try again.');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" onChange={handleChange} required placeholder="First Name" />
            <input name="lastName" onChange={handleChange} required placeholder="Last Name" />
            <input name="email" type="email" onChange={handleChange} required placeholder="Email" />
            <input name="password" type="password" onChange={handleChange} required placeholder="Password" />
            <input name="confirmPassword" type="password" onChange={handleChange} required placeholder="Confirm Password" />
            <button type="submit">Sign Up</button>
            <a href="/login">Already have an account? Login</a>
        </form>
    );
};

export default Signup;
