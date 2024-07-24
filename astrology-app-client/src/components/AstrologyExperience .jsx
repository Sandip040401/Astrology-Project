import React from 'react';
import image1 from '../assets/woman.jpg'; 
import image2 from '../assets/ai.jpg'; 

const AstrologyExperience = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-black text-white p-10">

      <div className="w-2/3 mx-auto text-center mt-10">
      <hr className='text-white my-5' />
        <h1 className="text-4xl font-bold">We Can Help Find Your Future With Astrology</h1>
        <p className="mt-4 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <div className="grid grid-cols-3 gap-5 mt-6">
          <p className="flex justify-start items-center text-indigo-300">
            <span className="w-3 h-3 bg-indigo-300 rounded-full mr-2"></span> Vastu Shastra
          </p>
          <p className="flex justify-start items-center text-indigo-300">
            <span className="w-3 h-3 bg-indigo-300 rounded-full mr-2"></span> Manglik Dosha
          </p>
          <p className="flex justify-start items-center text-indigo-300">
            <span className="w-3 h-3 bg-indigo-300 rounded-full mr-2"></span> Birth Journal
          </p>
          <p className="flex justify-start items-center text-indigo-300">
            <span className="w-3 h-3 bg-indigo-300 rounded-full mr-2"></span> Tarot Reading
          </p>
          <p className="flex justify-start items-center text-indigo-300">
            <span className="w-3 h-3 bg-indigo-300 rounded-full mr-2"></span> Palm Reading
          </p>
          <p className="flex justify-start items-center text-indigo-300">
            <span className="w-3 h-3 bg-indigo-300 rounded-full mr-2"></span> Crystal Ball
          </p>
        </div>
        <button className="mt-6 bg-indigo-500 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default AstrologyExperience;
