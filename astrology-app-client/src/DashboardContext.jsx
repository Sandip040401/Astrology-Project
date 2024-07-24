// DashboardContext.js
import React, { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('Profile');

  return (
    <DashboardContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </DashboardContext.Provider>
  );
};
