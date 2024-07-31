import React, { useState } from 'react';

const KundliMatching = () => {
  const initialDetails = {
    name: '',
    day: '1',
    month: 'Jan',
    year: '1990',
    hour: '1',
    minute: '1',
    second: '0',
    birthPlace: 'New Delhi, Delhi, India',
  };

  const [boyDetails, setBoyDetails] = useState(initialDetails);
  const [girlDetails, setGirlDetails] = useState(initialDetails);
  const [result, setResult] = useState(null);

  const handleChange = (e, setDetails) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/kundli-matching`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'User-Email': email
        },
        body: JSON.stringify({ boyDetails, girlDetails }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderFormSection = (details, setDetails, title) => (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h3 className="text-xl font-semibold mb-2 bg-yellow-300 p-2 rounded-md text-center">{title}</h3>
      <div className="space-y-2">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={details.name}
            onChange={(e) => handleChange(e, setDetails)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md"
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-sm font-medium mb-1">Day</label>
            <input
              type="number"
              name="day"
              value={details.day}
              onChange={(e) => handleChange(e, setDetails)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Month</label>
            <select
              name="month"
              value={details.month}
              onChange={(e) => handleChange(e, setDetails)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md"
            >
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Year</label>
            <input
              type="number"
              name="year"
              value={details.year}
              onChange={(e) => handleChange(e, setDetails)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-sm font-medium mb-1">Hour</label>
            <input
              type="number"
              name="hour"
              value={details.hour}
              onChange={(e) => handleChange(e, setDetails)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Minute</label>
            <input
              type="number"
              name="minute"
              value={details.minute}
              onChange={(e) => handleChange(e, setDetails)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Second</label>
            <input
              type="number"
              name="second"
              value={details.second}
              onChange={(e) => handleChange(e, setDetails)}
              className="w-full px-3 py-2 border border-gray-400 rounded-md"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Birth Place</label>
          <input
            type="text"
            name="birthPlace"
            value={details.birthPlace}
            onChange={(e) => handleChange(e, setDetails)}
            className="w-full px-3 py-2 border border-gray-400 rounded-md"
          />
        </div>
      </div>
    </div>
  );

  const renderResultTable = (result) => (
    <div className="mt-6 bg-white p-4 rounded-md shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-center">Kundli Matching Report</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-yellow-300">
            <th className="p-2 border">Attribute</th>
            <th className="p-2 border">Received</th>
            <th className="p-2 border">Out of</th>
            <th className="p-2 border">Area Of Life</th>
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Meaning</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-2 border font-semibold text-yellow-600">{item.attribute}</td>
              <td className="p-2 border">{item.received}</td>
              <td className="p-2 border">{item.outOf}</td>
              <td className="p-2 border">{item.areaOfLife}</td>
              <td className="p-2 border">{item.description}</td>
              <td className="p-2 border">{item.meaning}</td>
            </tr>
          ))}
          <tr className="bg-yellow-300 font-bold">
            <td className="p-2 border" colSpan="">Total</td>
            <td className="p-2 border">{result.reduce((acc, item) => acc + item.received, 0)}</td>
            <td className="p-2 border">{result.reduce((acc, item) => acc + item.outOf, 0)}</td>
            <td className="p-2 border" colSpan="3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  

  return (
    <div className="max-w-5xl mx-auto bg-gray-200 p-6 rounded-md text-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-center">Fill Up Partner's Detail</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderFormSection(boyDetails, setBoyDetails, "Boy's Detail")}
          {renderFormSection(girlDetails, setGirlDetails, "Girl's Detail")}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-yellow-500 hover:bg-yellow-600 rounded-md text-white transition-colors"
        >
          Match Horoscope
        </button>
      </form>
      {result && renderResultTable(result)}
    </div>
  );
};

export default KundliMatching;
