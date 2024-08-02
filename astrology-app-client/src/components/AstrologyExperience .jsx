import React from 'react';
import image1 from '../assets/woman.jpg'; 
import image2 from '../assets/ai.jpg'; 

const AstrologyExperience = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-black text-white p-10">

      <div className="w-2/3 mx-auto text-center mt-10">
        <hr className="border-gray-600 my-5" />
        <h1 className="text-4xl font-bold">We Can Help Find Your Future With Astrology</h1>
        <p className="mt-4 text-gray-300">
          Discover the ancient wisdom of astrology and unlock the secrets of your future. Our expert astrologers provide insights into your life path, helping you navigate your journey with confidence and clarity.
        </p>
        <div className='flex justify-center'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
        </div>

        {/* <button className="mt-10 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Read More
        </button> */}
      </div>

      {/* <div className="absolute top-0 right-0 w-1/4 h-full hidden lg:block">
        <img src={image1} alt="Astrology Experience" className="object-cover h-full w-full rounded-l-lg opacity-75"/>
      </div>
      <div className="absolute top-0 left-0 w-1/4 h-full hidden lg:block">
        <img src={image2} alt="Astrology and AI" className="object-cover h-full w-full rounded-r-lg opacity-75"/>
      </div> */}
    </div>
  );
};

export default AstrologyExperience;
