import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile'; 
import DailyHoroscope from '../components/DailyHoroscope';
import ZodiacCompatibility from '../components/ZodiacCompatibility';
import { DashboardContext } from '../DashboardContext';
import {Navbar} from '../components/Navbar';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Profile');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Profile':
        return <Profile />;
      case 'Horoscope':
        return <DailyHoroscope />;
      case 'ZodiacCompatibility':
        return <ZodiacCompatibility />;
      default:
        return <Profile />;
    }
  };

  return (
    <>
    <Navbar/>
        <DashboardContext.Provider value={{ activeComponent, setActiveComponent }}>
      <div className="flex h-screen bg-gray-900">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 min-w-[800px] p-6 bg-gray-800 border-l border-gray-700 overflow-y-auto">
          {renderComponent()}
        </div>
      </div>
    </DashboardContext.Provider>
    </>

  );
};

export default Dashboard;
