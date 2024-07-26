import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RingLoader } from 'react-spinners';

const DailyHoroscope = () => {
  const [horoscope, setHoroscope] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
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

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'User-Email': email
          }
        });

        setUserData({
          name: response.data.name,
          dob: response.data.dob,
          address: response.data.address
        });
      } catch (error) {
        toast.error('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, []);

  const fetchHoroscope = async () => {
    setIsLoading(true);
    setError('');
    try {
      if (!userData) throw new Error('User data is not available');

      const tokenString = localStorage.getItem('token');
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
          name: userData.name,
          dob: userData.dob,
          address: userData.address
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'User-Email': email
          }
        }
      );

      setHoroscope(response.data.horoscope);
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
      <div className="w-full max-w-lg p-8 bg-gray-900 rounded-lg shadow-2xl shadow-gray-500 border border-gray-700">
        <h1 className="text-3xl font-extrabold mb-6">Daily Horoscope</h1>
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
        {horoscope && (
          <div className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700">
            <h2 className="text-lg font-semibold mb-2">Today's Horoscope</h2>
            <p className="text-sm">{horoscope}</p>
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
