import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfile: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        phoneNumber: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            await axios.put('/api/profile', formData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Profile updated successfully!');
            // Redirect to profile page
            window.location.href = '/profile';
        } catch (error) {
            alert('Error updating profile. Please try again.');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" onChange={handleChange} required placeholder="First Name" />
            <input name="lastName" onChange={handleChange} required placeholder="Last Name" />
            <input name="email" type="email" onChange={handleChange} required placeholder="Email" />
            <input name="dateOfBirth" type="date" onChange={handleChange} required />
            <div>
                <label>Male:</label><input type="radio" name="gender" value="male" onChange={handleChange} />
                <label>Female:</label><input type="radio" name="gender" value="female" onChange={handleChange} />
            </div>
            <input name="phoneNumber" onChange={handleChange} required placeholder="Phone Number" />
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default UpdateProfile;
