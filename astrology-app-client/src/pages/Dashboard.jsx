import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DailyHoroscope from '../components/DailyHoroscope';
import ZodiacCompatibility from '../components/ZodiacCompatibility';
import KundliMatching from '../components/KundliMatching';
import { DashboardContext } from '../DashboardContext';
import { Navbar } from '../components/Navbar';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('ZodiacCompatibility');
  const [theme, setTheme] = useState('dark'); // Initialize theme state

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
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
      <Navbar/>
        <DashboardContext.Provider value={{ activeComponent, setActiveComponent, theme, toggleTheme }}>
          <div className={`flex h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <Sidebar />
            <div className={`flex-1 min-w-[800px] p-6 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border-l overflow-y-auto`}>
              {renderComponent()}
            </div>
          </div>
        </DashboardContext.Provider>
    </>

  );
};

export default Dashboard;
