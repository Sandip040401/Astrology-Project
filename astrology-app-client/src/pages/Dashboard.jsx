import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DailyHoroscope from '../components/DailyHoroscope';
import ZodiacCompatibility from '../components/ZodiacCompatibility';
import KundliMatching from '../components/KundliMatching';
import { DashboardContext } from '../DashboardContext';
import { Navbar } from '../components/Navbar';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('ZodiacCompatibility');
  const [theme, setTheme] = useState('colorful'); // Initialize theme state to colorful

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'colorful' ? 'light' : 'colorful'));
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Horoscope':
        return <DailyHoroscope />;
      case 'ZodiacCompatibility':
        return <ZodiacCompatibility />;
      case 'KundliMatching':
        return <KundliMatching />;
      default:
        return <ZodiacCompatibility />;
    }
  };

  return (
    <>
      {/* <Navbar/> */}

        <DashboardContext.Provider value={{ activeComponent, setActiveComponent, theme, toggleTheme }}>
          <div className={`flex h-screen ${theme === 'colorful' ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500' : 'bg-gray-100'}`}>
            <Sidebar />
            <div className={`flex-1 min-w-[800px] p-6 ${theme === 'colorful' ? 'bg-white border-black-300 shadow-lg' : 'bg-white border-gray-300'} border-l overflow-y-auto `}>
              {renderComponent()}
            </div>
          </div>
        </DashboardContext.Provider>
    </>
  );
};

export default Dashboard;
