import React, { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('Profile');
  const [theme, setTheme] = useState('dark'); // Initialize theme state

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <DashboardContext.Provider value={{ activeComponent, setActiveComponent, theme, toggleTheme }}>
      {children}
    </DashboardContext.Provider>
  );
};
