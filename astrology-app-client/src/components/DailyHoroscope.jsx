import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RingLoader } from 'react-spinners';

const DailyHoroscope = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [timeOfBirth, setTimeOfBirth] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [zodiacSign, setZodiacSign] = useState(null);
  const [horoscope, setHoroscope] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchHoroscope = async () => {
    setIsLoading(true);
    setError('');
    try {
      const tokenString = localStorage.getItem('token');
      if (!tokenString) throw new Error('No token found');

      const tokenParts = tokenString.replace(/{|}/g, '').split(',');
      const tokenObject = {};
      tokenParts.forEach(part => {
        const [key, value] = part.split(':').map(item => item.trim().replace(/['"]/g, ''));
        tokenObject[key] = value;
      });

      const email = tokenObject.result;
      const token = tokenObject.token;

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/horoscope/generate`,
        {
          name,
          dob,
          timeOfBirth,
          placeOfBirth
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'User-Email': email
          }
        }
      );

      setHoroscope(response.data.horoscope);
      setZodiacSign(response.data.zodiacSign);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch horoscope');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 min-h-screen text-white">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="w-full max-w-5xl p-8 bg-gray-900 rounded-lg shadow-2xl shadow-gray-500 border border-gray-700">
        <h1 className="text-3xl font-extrabold mb-6">Daily Horoscope</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Date of Birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Time of Birth</label>
          <input
            type="time"
            value={timeOfBirth}
            onChange={(e) => setTimeOfBirth(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Place of Birth</label>
          <input
            type="text"
            value={placeOfBirth}
            onChange={(e) => setPlaceOfBirth(e.target.value)}
            className="w-full px-3 py-2 bg-gray-800 text-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
        <button
          onClick={fetchHoroscope}
          className="w-full px-6 py-3 bg-white text-black rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Get Daily Horoscope'}
        </button>
        {isLoading && (
          <div className="mt-4 flex justify-center">
            <RingLoader size={50} color="#ffffff" loading={isLoading} />
          </div>
        )}
        {zodiacSign && (
          <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <h2 className="text-lg font-semibold mb-2">Zodiac Sign: {zodiacSign.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                <h3 className="text-md font-semibold mb-2">Advantages</h3>
                <ul className="list-disc list-inside">
                  {zodiacSign.good_traits.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                <h3 className="text-md font-semibold mb-2">Disadvantages</h3>
                <ul className="list-disc list-inside">
                  {zodiacSign.bad_traits.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                <h3 className="text-md font-semibold mb-2">Personality</h3>
                <ul className="list-disc list-inside">
                  {zodiacSign.personality.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                <h3 className="text-md font-semibold mb-2">Powers</h3>
                <ul className="list-disc list-inside">
                  {zodiacSign.powers.map((power, index) => (
                    <li key={index}>{power}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-700 rounded-lg shadow-md">
                <h3 className="text-md font-semibold mb-2">Weaknesses</h3>
                <ul className="list-disc list-inside">
                  {zodiacSign.weaknesses.map((weakness, index) => (
                    <li key={index}>{weakness}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
        {error && (
          <div className="mt-6 p-6 bg-gray-700 border border-gray-600 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-red-300 mb-2">Error</h2>
            <p className="text-sm text-red-200">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyHoroscope;
