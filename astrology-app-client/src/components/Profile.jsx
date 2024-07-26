import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RingLoader } from 'react-spinners';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: {
      village: '',
      district: '',
      state: '',
      pincode: ''
    },
    phoneNumber: '',
    fatherName: '',
    motherName: '',
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenString = localStorage.getItem('token');
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

        const data = response.data;
        setFormData({
          name: data.name,
          dob: data.dob.split('T')[0],
          address: {
            village: data.address.village,
            district: data.address.district,
            state: data.address.state,
            pincode: data.address.pincode
          },
          phoneNumber: data.phoneNumber,
          fatherName: data.fatherName,
          motherName: data.motherName,
          email: data.email,
          password: ''
        });
      } catch (error) {
        toast.error('Failed to fetch user data');
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('address.')) {
      const addressField = name.split('.')[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressField]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const tokenString = localStorage.getItem('token');
      const tokenParts = tokenString.replace(/{|}/g, '').split(',');
      const tokenObject = {};
      tokenParts.forEach(part => {
        const [key, value] = part.split(':').map(item => item.trim().replace(/['"]/g, ''));
        tokenObject[key] = value;
      });

      const email = tokenObject.result;
      const token = tokenObject.token;

      await axios.put(`${import.meta.env.VITE_BASE_URL}/api/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'User-Email': email
        }
      });
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="bg-gray-900 p-6 rounded-lg shadow-2xl shadow-gray-500 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-200 mb-6">Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-gray-300">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Date of Birth"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">Phone Number</label>
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="village" className="block text-sm font-medium text-gray-300">Village</label>
              <input
                type="text"
                id="village"
                name="address.village"
                value={formData.address.village}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Village"
              />
            </div>
            <div>
              <label htmlFor="district" className="block text-sm font-medium text-gray-300">District</label>
              <input
                type="text"
                id="district"
                name="address.district"
                value={formData.address.district}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="District"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium text-gray-300">State</label>
              <input
                type="text"
                id="state"
                name="address.state"
                value={formData.address.state}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="State"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="pincode" className="block text-sm font-medium text-gray-300">Pincode</label>
              <input
                type="text"
                id="pincode"
                name="address.pincode"
                value={formData.address.pincode}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Pincode"
              />
            </div>
            <div>
              <label htmlFor="fatherName" className="block text-sm font-medium text-gray-300">Father's Name</label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Father's Name"
              />
            </div>
            <div>
              <label htmlFor="motherName" className="block text-sm font-medium text-gray-300">Mother's Name</label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Mother's Name"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                disabled
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 mt-1 border border-gray-600 rounded-md bg-gray-900 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                placeholder="Enter new password to change"
              />
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full md:w-auto px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <RingLoader size={24} color={"#fff"} loading={isSubmitting} />
              ) : (
                'Update Profile'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
