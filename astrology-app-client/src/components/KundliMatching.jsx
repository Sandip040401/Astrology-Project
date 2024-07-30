import React, { useState } from 'react';

const KundliMatching = () => {
  const [name1, setName1] = useState('');
  const [dob1, setDob1] = useState('');
  const [name2, setName2] = useState('');
  const [dob2, setDob2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example API call to get Kundli matching result
    const response = await fetch('/api/kundli-matching', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name1, dob1, name2, dob2 }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-700 p-6 rounded-md text-gray-300">
      <h2 className="text-2xl font-bold mb-4">Kundli Matching</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name1">Name 1</label>
          <input
            type="text"
            id="name1"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="dob1">Date of Birth 1</label>
          <input
            type="date"
            id="dob1"
            value={dob1}
            onChange={(e) => setDob1(e.target.value)}
            className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name2">Name 2</label>
          <input
            type="text"
            id="name2"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="dob2">Date of Birth 2</label>
          <input
            type="date"
            id="dob2"
            value={dob2}
            onChange={(e) => setDob2(e.target.value)}
            className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-gray-300"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition-colors"
        >
          Match
        </button>
      </form>
      {result && (
        <div className="mt-6">
          <h3 className="text-xl font-bold mb-2">Matching Result</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default KundliMatching;
