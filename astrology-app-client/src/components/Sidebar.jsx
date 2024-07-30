import React, { useContext } from 'react';
import { FaSignOutAlt, FaStar, FaHeart, FaChartLine, FaMoon, FaSun } from 'react-icons/fa'; // Import the icons
import { DashboardContext } from '../DashboardContext';

const Sidebar = () => {
  const { setActiveComponent, theme, toggleTheme } = useContext(DashboardContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className={`w-72 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} flex flex-col p-6 border-r ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
      <ul className="space-y-4">
        <li>
          <button
            onClick={() => setActiveComponent('Horoscope')}
            className={`flex items-center w-full text-left px-4 py-2 rounded-md transition-colors ${theme === 'dark' ? 'hover:bg-gray-700 active:bg-gray-600' : 'hover:bg-gray-200 active:bg-gray-300'}`}
          >
            <FaStar className="mr-3 text-xl" />
            <span className="text-lg font-medium">Get Horoscope</span>
          </button>
        </li> 
        <li>
          <button
            onClick={() => setActiveComponent('ZodiacCompatibility')}
            className={`flex items-center w-full text-left px-4 py-2 rounded-md transition-colors ${theme === 'dark' ? 'hover:bg-gray-700 active:bg-gray-600' : 'hover:bg-gray-200 active:bg-gray-300'}`}
          >
            <FaHeart className="mr-3 text-xl" />
            <span className="text-lg font-medium">Zodiac Compatibility</span>
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveComponent('KundliMatching')}
            className={`flex items-center w-full text-left px-4 py-2 rounded-md transition-colors ${theme === 'dark' ? 'hover:bg-gray-700 active:bg-gray-600' : 'hover:bg-gray-200 active:bg-gray-300'}`}
          >
            <FaChartLine className="mr-3 text-xl" />
            <span className="text-lg font-medium">Kundli Matching</span>
          </button>
        </li>
        {/* <li>
          <button
            onClick={toggleTheme}
            className={`flex items-center w-full text-left px-4 py-2 rounded-md transition-colors ${theme === 'dark' ? 'hover:bg-gray-700 active:bg-gray-600' : 'hover:bg-gray-200 active:bg-gray-300'}`}
          >
            {theme === 'dark' ? <FaSun className="mr-3 text-xl" /> : <FaMoon className="mr-3 text-xl" />}
            <span className="text-lg font-medium">Toggle Theme</span>
          </button>
        </li> */}
        <li>
          <button
            onClick={handleLogout}
            className={`flex items-center w-full text-left px-4 py-2 rounded-md transition-colors ${theme === 'dark' ? 'hover:bg-gray-700 active:bg-gray-600' : 'hover:bg-gray-200 active:bg-gray-300'}`}
          >
            <FaSignOutAlt className="mr-3 text-xl" />
            <span className="text-lg font-medium">Logout</span>
          </button>
        </li>
          <div id="google_translate_element" className="ml-4"></div>
      </ul>
    </div>
  );
};

export default Sidebar;
