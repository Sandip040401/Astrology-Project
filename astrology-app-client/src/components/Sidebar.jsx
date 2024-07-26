import React, { useContext } from 'react';
import { FaUser, FaSignOutAlt, FaStar, FaHeart } from 'react-icons/fa'; // Import the icons
import { DashboardContext } from '../DashboardContext';

const Sidebar = () => {
  const { setActiveComponent } = useContext(DashboardContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="w-72 bg-gray-800 text-white flex flex-col p-6 border-r border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-300">Dashboard</h2>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => setActiveComponent('Horoscope')}
            className="flex items-center w-full text-left px-4 py-2 rounded-md transition-colors hover:bg-gray-700 active:bg-gray-600"
          >
            <FaStar className="mr-3 text-gray-400 text-xl" />
            <span className="text-lg font-medium">Daily Horoscope</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveComponent('Profile')}
            className="flex items-center w-full text-left px-4 py-2 rounded-md transition-colors hover:bg-gray-700 active:bg-gray-600"
          >
            <FaUser className="mr-3 text-gray-400 text-xl" />
            <span className="text-lg font-medium">Profile</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveComponent('ZodiacCompatibility')}
            className="flex items-center w-full text-left px-4 py-2 rounded-md transition-colors hover:bg-gray-700 active:bg-gray-600"
          >
            <FaHeart className="mr-3 text-gray-400 text-xl" />
            <span className="text-lg font-medium">Zodiac Compatibility</span>
          </button>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center w-full text-left px-4 py-2 rounded-md transition-colors hover:bg-gray-700 active:bg-gray-600"
          >
            <FaSignOutAlt className="mr-3 text-gray-400 text-xl" />
            <span className="text-lg font-medium">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
