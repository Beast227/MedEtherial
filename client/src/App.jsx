import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';   
import Home from './pages/Home';
import Schedules from './pages/Schedules';
import DoctorAppointment from './pages/DoctorAppointment';
import SignIn from './pages/Register';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/doctor-appointment" element={<DoctorAppointment />} />
            <Route path="/login" element={<SignIn onLogin={handleLogin} />} />
           
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
