import React, { useState } from 'react';
import image1 from '../assets/zodiac03.jpeg'; 

const ZodiacForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to process form data goes here
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-10">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-6">Know Your Zodiac Sign</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-300">Date Of Birth:</label>
            <input 
              type="date" 
              id="dateOfBirth" 
              name="dateOfBirth"
              value={formData.dateOfBirth}  
              onChange={handleChange} 
              className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="timeOfBirth" className="block text-sm font-medium text-gray-300">Time Of Birth:</label>
            <input
               type="time"
               id="timeOfBirth"
               name="timeOfBirth"
               value={formData.timeOfBirth}
               onChange={handleChange}
               className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
             />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg shadow-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Find Zodiac
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/3 p-8 mt-8 md:mt-0">
        <img src={image1} alt="Zodiac Signs" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default ZodiacForm;
