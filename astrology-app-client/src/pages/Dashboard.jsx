import React, { useState, createContext } from 'react';
import Sidebar from '../components/Sidebar';
import Profile from '../components/Profile'; // Assuming Profile is a component
import DailyHoroscope from '../components/DailyHoroscope'; // Import the Horoscope component
import { DashboardContext } from '../DashboardContext';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('Profile');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Profile':
        return <Profile />;
      case 'Horoscope':
        return <DailyHoroscope />; // Render Horoscope component
      default:
        return <Profile />;
    }
  };

  return (
    <DashboardContext.Provider value={{ activeComponent, setActiveComponent }}>
      <div className="flex h-screen">
        <Sidebar className="h-full overflow-y-auto" />
        <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          {renderComponent()}
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export default Dashboard;
