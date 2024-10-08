import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
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
            pincode: ''
        },
        phoneNumber: '',
        fatherName: '',
        motherName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [passwordStrength, setPasswordStrength] = useState({ text: '', color: 'red' });
    const [isEmailValid, setIsEmailValid] = useState(false);
    const backendUrl = import.meta.env.VITE_BASE_URL;

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (['village', 'district', 'state', 'pincode'].includes(name)) {
            setForm({
                ...form,
                address: {
                    ...form.address,
                    [name]: value
                }
            });
        } else {
            setForm({
                ...form,
                [name]: value
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

        const response = await fetch(`${backendUrl}/api/users/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (response.ok) {
            toast.success('Form submitted successfully');
            // Handle successful form submission (e.g., redirect to another page)
            window.location.href = '/signin'; // Replace with your desired URL
        } else {
            const error = await response.text();
            toast.error(`Error: ${error}`);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-black">
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
        <div className="w-full max-w-4xl p-10 space-y-8 bg-gradient-to-r from-gray-500 to-black text-black shadow-lg rounded-lg ">
            <h2 className="text-3xl font-bold text-center text-white">Create Your Account</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex space-x-4 ">
                    <div className="flex-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200">
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
                    <div className="flex-1">
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-200">
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
                    <div className="flex-1">
                        <label htmlFor="village" className="block text-sm font-medium text-gray-200">
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
                </div>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label htmlFor="district" className="block text-sm font-medium text-gray-200">
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
                    <div className="flex-1">
                        <label htmlFor="state" className="block text-sm font-medium text-gray-200">
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
                    <div className="flex-1">
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-200">
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
                </div>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-200">
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
                    <div className="flex-1">
                        <label htmlFor="fatherName" className="block text-sm font-medium text-gray-200">
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
                    <div className="flex-1">
                        <label htmlFor="motherName" className="block text-sm font-medium text-gray-200">
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
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200">
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
                <div className="flex gap-4">
    <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-200">
            Password
        </label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            className={`w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-${passwordStrength.color}-500 focus:border-${passwordStrength.color}-500`}
        />
        {form.password && (
            <p className={`mt-1 text-sm font-medium text-${passwordStrength.color}-500`}>
                {passwordStrength.text}
            </p>
        )}
    </div>
    <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">
            Confirm Password
        </label>
        <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
    </div>
</div>
                <div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
            <div className="text-center">
                <p className="text-sm text-gray-300">
                    Already have an account?{' '}
                    <Link to="/signin" className="font-lg text-indigo-300 hover:text-indigo-200">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    </div>
    <Footer/>
    </>

    );
}
