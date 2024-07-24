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
        <h1 className="text-3xl font-bold mb-4">Know Your Zodiac Sign</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
             />
          </div>
          
          <button type='submit' className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-lg hover:">Find Zodiac</button>
        </form>
      </div>

      <div className="w-full md:w-1/3 p-8">
        <img src={image1} alt="Zodiac Signs" className="w-full h-auto rounded-lg opacity-50 shadow-md" />
      </div>
    </div>
  );
};

export default ZodiacForm;
