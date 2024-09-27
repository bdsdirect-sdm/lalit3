import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile: React.FC = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    useEffect(() => {
        const fetchUserInfo = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('/api/profile', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUserInfo(response.data);
        };

        fetchUserInfo();
    }, []);


    return (
        <div>
            {userInfo ? (
                <>
                    <h1>User Profile</h1>
                    <p>Name: {userInfo.firstName} {userInfo.lastName}</p>
                    <p>Email: {userInfo.email}</p>
                    <a href="/update-profile">Update Profile</a>
                    <a href="/logout">Logout</a>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
