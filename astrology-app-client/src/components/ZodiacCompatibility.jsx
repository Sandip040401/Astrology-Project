import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Transition } from '@headlessui/react';
import 'react-toastify/dist/ReactToastify.css';
import Meter from './Meter';

const zodiacSigns = [
  { name: 'Aries', image: '/aries.png', dates: 'Mar 21 - Apr 19' },
  { name: 'Taurus', image: '/taurus.png', dates: 'Apr 20 - May 20' },
  { name: 'Gemini', image: '/gemini.png', dates: 'May 21 - Jun 20' },
  { name: 'Cancer', image: '/cancer.png', dates: 'Jun 21 - Jul 22' },
  { name: 'Leo', image: '/leo.png', dates: 'Jul 23 - Aug 22' },
  { name: 'Virgo', image: '/virgo.png', dates: 'Aug 23 - Sep 22' },
  { name: 'Libra', image: '/libra.png', dates: 'Sep 23 - Oct 22' },
  { name: 'Scorpio', image: '/scorpio.png', dates: 'Oct 23 - Nov 21' },
  { name: 'Sagittarius', image: '/sagittarius.png', dates: 'Nov 22 - Dec 21' },
  { name: 'Capricorn', image: '/capricorn.png', dates: 'Dec 22 - Jan 19' },
  { name: 'Aquarius', image: '/aquarius.png', dates: 'Jan 20 - Feb 18' },
  { name: 'Pisces', image: '/pisces.png', dates: 'Feb 19 - Mar 20' }
];

const ZodiacCompatibility = () => {
  const [selectedSign1, setSelectedSign1] = useState('');
  const [selectedSign2, setSelectedSign2] = useState('');
  const [compatibility, setCompatibility] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckCompatibility = async () => {
    if (!selectedSign1 || !selectedSign2) {
      toast.error('Please select both signs');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/compatibility/check/${selectedSign1}/${selectedSign2}`
      );

      setCompatibility(response.data);
      toast.success('Compatibility data fetched successfully');
    } catch (error) {
      toast.error('Failed to fetch compatibility data');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (selectedSign2) {
      setSelectedSign2('');
    } else {
      setSelectedSign1('');
    }
    setCompatibility(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-2xl shadow-gray-400">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Zodiac Compatibility</h2>

      {!selectedSign1 && (
        <Transition
          show={!selectedSign1}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-600">Choose Your Sign</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {zodiacSigns.map(sign => (
                <div
                  key={sign.name}
                  className={`border rounded-lg p-6 text-center shadow-md shadow-gray-300 cursor-pointer hover:bg-gray-100 transition-transform transform hover:scale-105 ${selectedSign1 === sign.name ? 'border-blue-400 shadow-lg' : 'border-gray-300'}`}
                  onClick={() => setSelectedSign1(sign.name)}
                >
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img 
                      src={sign.image} 
                      alt={sign.name} 
                      className="w-12 h-full object-contain" 
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-800">{sign.name}</p>
                  <p className="text-sm text-gray-500">{sign.dates}</p>
                </div>
              ))}
            </div>
          </div>
        </Transition>
      )}

      {selectedSign1 && !selectedSign2 && (
        <Transition
          show={selectedSign1 && !selectedSign2}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={handleBack}
                className="px-5 py-2 bg-gray-200 text-gray-800 text-base font-semibold rounded-md shadow-md hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <h3 className="text-2xl font-semibold text-center flex-1 text-gray-800">Choose Your Partner's Sign</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {zodiacSigns.map(sign => (
                <div
                  key={sign.name}
                  className={`border rounded-lg p-6 text-center shadow-md shadow-gray-300 cursor-pointer hover:bg-gray-100 transition-transform transform hover:scale-105 ${selectedSign2 === sign.name ? 'border-blue-400 shadow-lg' : 'border-gray-300'}`}
                  onClick={() => setSelectedSign2(sign.name)}
                >
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img 
                      src={sign.image} 
                      alt={sign.name} 
                      className="w-12 h-full object-contain" 
                    />
                  </div>
                  <p className="text-lg font-medium text-gray-800">{sign.name}</p>
                  <p className="text-sm text-gray-500">{sign.dates}</p>
                </div>
              ))}
            </div>
          </div>
        </Transition>
      )}

      {selectedSign1 && selectedSign2 && (
        <Transition
          show={selectedSign1 && selectedSign2}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mt-8 text-center">
            <div className="flex justify-center mb-6 space-x-4">
              <button
                onClick={handleBack}
                className="px-5 py-2 bg-gray-200 text-gray-800 text-base font-semibold rounded-md shadow-md hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleCheckCompatibility}
                className="px-5 py-2 bg-blue-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-blue-500 transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Checking...' : 'Check Compatibility'}
              </button>
            </div>
            {compatibility && (
              <div className="mt-6 p-6 bg-gray-100 rounded-xl shadow-lg border border-gray-300">
                <h3 className="text-3xl font-extrabold mb-6 text-gray-800">{selectedSign1} & {selectedSign2} Compatibility</h3>
                <div className="space-y-6">
                  <Meter value={compatibility.loveCompatibility} label="Love Compatibility" description={compatibility.descriptions.love} />
                  <Meter value={compatibility.sexualCompatibility} label="Sexual Compatibility" description={compatibility.descriptions.sexual} />
                  <Meter value={compatibility.friendshipCompatibility} label="Friendship Compatibility" description={compatibility.descriptions.friendship} />
                  <Meter value={compatibility.communicationCompatibility} label="Communication Compatibility" description={compatibility.descriptions.communication} />
                </div>
                <p className="mt-6 text-gray-800">{compatibility.relationshipTips}</p>
              </div>
            )}
          </div>
        </Transition>
      )}
    </div>
  );
};

export default ZodiacCompatibility;
