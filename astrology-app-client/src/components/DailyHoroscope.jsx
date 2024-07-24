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
    setIsLoading(true); // Set loading state to true
    setError(''); // Reset any previous errors
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
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
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
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Daily Horoscope</h1>
      <button
        onClick={fetchHoroscope}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Get Daily Horoscope'}
      </button>
      {isLoading && (
        <div className="mt-4">
          <RingLoader size={50} color="#3498db" loading={isLoading} />
        </div>
      )}
      {horoscope && (
        <div className="mt-6 w-full max-w-3xl p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Today's Horoscope</h2>
          <p className="text-lg text-gray-700">{horoscope}</p>
        </div>
      )}
      {error && (
        <div className="mt-6 w-full max-w-3xl p-6 bg-red-100 border border-red-300 rounded-lg">
          <h2 className="text-xl font-semibold text-red-700">Error</h2>
          <p className="text-lg text-red-600">{error}</p>
        </div>
      )}
    </div>
  );
};

export default DailyHoroscope;
