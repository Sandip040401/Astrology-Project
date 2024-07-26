import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import background from '../assets/background.jpg';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function Signup() {
  const [form, setForm] = useState({
    name: '',
    dob: '',
    address: {
      village: '',
      district: '',
      state: '',
      pincode: '',
    },
    phoneNumber: '',
    fatherName: '',
    motherName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordStrength, setPasswordStrength] = useState({ text: '', color: 'red' });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const backendUrl = import.meta.env.VITE_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['village', 'district', 'state', 'pincode'].includes(name)) {
      setForm({
        ...form,
        address: {
          ...form.address,
          [name]: value,
        },
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }

    if (name === 'password') {
      evaluatePasswordStrength(value);
    }
    if (name === 'email') {
      validateEmail(value);
    }
  };

  const evaluatePasswordStrength = (password) => {
    let strength = { text: '', color: 'red' };
    if (password.length > 0 && password.length < 6) {
      strength = { text: 'Too weak', color: 'red' };
    } else if (password.length >= 6 && password.length < 8) {
      strength = { text: 'Weak', color: 'orange' };
    } else if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
      strength = { text: 'Strong', color: 'green' };
    } else if (password.length >= 8) {
      strength = { text: 'Moderate', color: 'yellow' };
    }
    setPasswordStrength(strength);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${backendUrl}/api/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success('Form submitted successfully');
        // Redirect to sign-in page
        window.location.href = '/signin';
      } else {
        const error = await response.text();
        toast.error(`Error: ${error}`);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Navbar/>
        <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg bg-opacity-5 backdrop-blur-sm">
        <h2 className="text-2xl font-bold text-white text-center">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              placeholder="Enter name"
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-white">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="village" className="block text-sm font-medium text-white">
              Village
            </label>
            <input
              type="text"
              id="village"
              name="village"
              value={form.address.village}
              placeholder="Enter village"
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="district" className="block text-sm font-medium text-white">
              District
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={form.address.district}
              placeholder="Enter district"
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-white">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={form.address.state}
              placeholder="Enter state"
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="pincode" className="block text-sm font-medium text-white">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={form.address.pincode}
              placeholder="Enter pincode"
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="1234567890"
              value={form.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="fatherName" className="block text-sm font-medium text-white">
              Father's Name
            </label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              placeholder="Enter father's name"
              value={form.fatherName}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="motherName" className="block text-sm font-medium text-white">
              Mother's Name
            </label>
            <input
              type="text"
              id="motherName"
              name="motherName"
              placeholder="Enter mother's name"
              value={form.motherName}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              placeholder="example@gmail.com"
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              placeholder="Enter password"
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className={`text-${passwordStrength.color}-500`}>{passwordStrength.text}</p>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              placeholder="Confirm password"
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isSubmitting ? 'bg-gray-500 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
            >
              {isSubmitting ? 'Submitting...' : 'Sign Up'}
            </button>
          </div>
          <p className="mt-2 text-sm text-center text-white">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign In
            </Link>
          </p>
        </form>
      </div>
        </div>
        <Footer/>
    </>

  );
}
