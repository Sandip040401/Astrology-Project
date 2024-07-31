import React, { useState } from 'react';
import image1 from '../assets/zodiac03.jpeg'; 

const ZodiacForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: ''
  });
  const [zodiacSign, setZodiacSign] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.dateOfBirth) {
      setShowPopup(false);
      return;
    }

    const birthDate = new Date(formData.dateOfBirth + ' ' + formData.timeOfBirth);
    const zodiac = getZodiacSign(birthDate);
    setZodiacSign(zodiac);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-black text-white ">
      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-6">Know Your Zodiac Sign</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
               className="mt-1 block w-full px-4 py-3 border border-gray-600 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
             />
          </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg shadow-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
          >
            Find Zodiac
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/3 p-8 mt-8 md:mt-0">
        <img src={image1} alt="Zodiac Signs" className="w-full h-auto rounded-lg shadow-md" />
      </div>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg relative text-black">
            <span
              className="close absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer"
              onClick={handleClosePopup}
            >
              &times;
            </span>
            <p className="text-lg font-medium text-gray-800">
  Hello <span className="font-bold text-indigo-600">{formData.name}</span>, your zodiac sign is <span className="font-bold text-indigo-600">{zodiacSign}</span>.
  <br />
  <span className="block mt-2 text-gray-600">
    <strong className="text-gray-800">Advantages:</strong> {getAdvantages(zodiacSign)}
  </span>
  <span className="block mt-2 text-gray-600">
    <strong className="text-gray-800">Disadvantages:</strong> {getDisadvantages(zodiacSign)}
  </span>
</p>

          </div>
        </div>
      )}
    </div>
  );
};

const getZodiacSign = (birthDate) => {
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();

  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return 'Aquarius';
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return 'Pisces';
  } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return 'Aries';
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return 'Taurus';
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return 'Gemini';
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return 'Cancer';
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return 'Leo';
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return 'Virgo';
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return 'Libra';
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return 'Scorpio';
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return 'Sagittarius';
  } else {
    return 'Capricorn';
  }
};

const getAdvantages = (zodiacSign) => {
  switch (zodiacSign) {
    case 'Aquarius':
      return 'Innovative, independent, humanitarian';
    case 'Pisces':
      return 'Compassionate, artistic, intuitive';
    case 'Aries':
      return 'Courageous, determined, confident';
    case 'Taurus':
      return 'Reliable, patient, practical';
    case 'Gemini':
      return 'Adaptable, outgoing, intelligent';
    case 'Cancer':
      return 'Loyal, emotional, nurturing';
    case 'Leo':
      return 'Generous, warm-hearted, cheerful';
    case 'Virgo':
      return 'Analytical, meticulous, reliable';
    case 'Libra':
      return 'Diplomatic, charming, fair-minded';
    case 'Scorpio':
      return 'Resourceful, brave, passionate';
    case 'Sagittarius':
      return 'Optimistic, adventurous, honest';
    case 'Capricorn':
      return 'Disciplined, responsible, ambitious';
    default:
      return 'N/A';
  }
};

const getDisadvantages = (zodiacSign) => {
  switch (zodiacSign) {
    case 'Aquarius':
      return 'Unpredictable, detached, aloof';
    case 'Pisces':
      return 'Overly trusting, escapist, idealistic';
    case 'Aries':
      return 'Impatient, aggressive, impulsive';
    case 'Taurus':
      return 'Stubborn, possessive, uncompromising';
    case 'Gemini':
      return 'Indecisive, impulsive, unreliable';
    case 'Cancer':
      return 'Moody, pessimistic, clingy';
    case 'Leo':
      return 'Arrogant, stubborn, self-centered';
    case 'Virgo':
      return 'Overcritical, perfectionist, uptight';
    case 'Libra':
      return 'Indecisive, avoids confrontations, self-pitying';
    case 'Scorpio':
      return 'Jealous, secretive, resentful';
    case 'Sagittarius':
      return 'Overconfident, tactless, impatient';
    case 'Capricorn':
      return 'Pessimistic, unforgiving, condescending';
    default:
      return 'N/A';
  }
};

export default ZodiacForm;
