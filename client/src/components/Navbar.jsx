import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
 
    navigate('/login');
    if (onLogout) {
      onLogout(); 
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black shadow-md px-4 py-6 flex items-center justify-between z-50 h-20"> {/* Added a fixed height */}
      <div className="flex items-center">
        <div className="mr-6">
          <h1 className='text-white font-bold text-2xl'>Med-Ethereal</h1>
        </div>
      </div>
      <div className="flex flex-1 justify-center">
        <div className="flex">
          <Link to="/" className="text-white text-xl hover:text-gray-300 hover:text-2xl transition-all duration-200 border-r border-gray-500 px-4">Home</Link>
          <Link to="/schedules" className="text-white text-xl hover:text-gray-300 hover:text-2xl transition-all duration-200 border-r border-gray-500 px-4">Schedules</Link>
          <Link to="/doctor-appointment" className="text-white text-xl hover:text-gray-300 hover:text-2xl transition-all duration-200 border-r border-gray-500 px-4">Doctor Appointment</Link>
          <Link to="/hospital-connection" className="text-white text-xl hover:text-gray-300 hover:text-2xl transition-all duration-200 px-4">Hospital Connection</Link>
        </div>
      </div>
      <div>
        {isLoggedIn ? (
          <div className="flex items-center">
            {/* Replace with your profile icon or avatar */}
            <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            <button onClick={handleLogout} className="ml-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="ml-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
