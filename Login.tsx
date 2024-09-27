import React, { useState } from 'react';
import axios from 'axios';

const Login: React.FC = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login', credentials);
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            // Redirect to profile page
            window.location.href = '/profile';
        } catch (error) {
            alert('Error logging in. Please try again.');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input name="email" type="email" onChange={handleChange} required placeholder="Email" />
            <input name="password" type="password" onChange={handleChange} required placeholder="Password" />
            <button type="submit">Login</button>
            <a href="/signup">Don't have an account? Sign Up</a>
        </form>
    );
};

export default Login;
