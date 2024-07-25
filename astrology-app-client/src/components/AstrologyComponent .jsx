import React from 'react';
import astrologyImage from '../assets/zodiac.png';
import { Link } from 'react-router-dom';

const AstrologyComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-16 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-center">
        <p className="text-lg lg:text-xl font-semibold mb-4">Unlimited Guide to Astrology</p>
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">Your Star Determines</h1>
        <p className="text-3xl lg:text-5xl font-bold mb-6">Your Life's Journey</p>
        <p className="text-base lg:text-md mb-8 py-2">
          Welcome to Astrology, where the universe meets your personal journey. Dive into the stars with our daily horoscopes, personalized birth charts, and expert astrology readings. Whether you're seeking guidance or a deeper connection to your celestial self, our platform offers insightful and tailored astrological experiences to illuminate your path. Join us and let the cosmos guide you toward a more enlightened and harmonious life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to='/signin'><button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Getting Started
          </button></Link>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
            Find Out More
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img src={astrologyImage} alt="Astrology" className="w-3/4 lg:w-full max-w-sm lg:max-w-sm rounded-lg transform transition duration-500 hover:scale-105 invert" />
      </div>
    </div>
  );
}

export default AstrologyComponent;
