import React from 'react';
import astrologyImage from '../assets/zodiac.png';

const AstrologyComponent = () => {
  return (
    <div className="flex justify-between items-center  p-20 relative bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="w-1/2 p-20">
      <p className="text-m">Unlimited Guide to Astrology</p>
        <h1 className="text-4xl py-5 font-bold mb-4">Your Star Determines</h1>
        <p className="text-4xl py-5">Your Life's Journey</p>
        <p className="py-20">Lorem ipsum dolor sit amet consectetur similique mollitia suscipit temporibus sunt voluptatibus possimus. Vitae quidem, animi molestiae suscipit obcaecati dolor unde accusamus, libero quas, voluptatum eum qui. Iste eum ad reprehenderit corporis adipisci ab iure ipsum. Consequatur, natus?
        </p>
        <div className="mt-8">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4 hover:bg-blue-700">
            Getting Started
          </button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Find Out More
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src={astrologyImage} alt="Astrology" className="w-1/2 rounded-lg invert"/>
      </div>
      <br />
      
    </div>


  );
}

export default AstrologyComponent;
