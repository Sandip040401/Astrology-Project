import React, { useContext } from 'react';
import { FaUser, FaSignOutAlt, FaStar } from 'react-icons/fa';
import { DashboardContext } from '../DashboardContext';

const Sidebar = () => {
  const { setActiveComponent } = useContext(DashboardContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="h-full w-64 bg-gray-900 text-white flex flex-col p-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => setActiveComponent('Horoscope')}
            className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md transition"
          >
            <FaStar className="mr-2" />
            Daily Horoscope
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveComponent('Profile')}
            className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md transition"
          >
            <FaUser className="mr-2" />
            Profile
          </button>
        </li>
        <li>
          <button 
            onClick={handleLogout} 
            className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md transition"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
