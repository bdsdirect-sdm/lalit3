import React from 'react';
import { BrowserRouter as Route, Routes, BrowserRouter } from 'react-router-dom';
import Signup from './SignUp';
import Login from './Login';
import Profile from './Profile';
import UpdateProfile from './UpdateProfile';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
