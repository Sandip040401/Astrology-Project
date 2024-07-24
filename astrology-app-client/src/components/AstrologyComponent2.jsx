import React from 'react';
import image1 from '../assets/zodiac2.png';
import image2 from '../assets/constellations.png';
import image3 from '../assets/armillary.png'; // Adjust the paths as needed

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-2 flex flex-col items-center" style={{ width: '300px' }}>
      <img src={image} alt={title} className="w-24 h-24 mb-4 opacity-75"/>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const AstrologyComponent2 = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 to-black flex justify-center overflow-x-auto">
      <Card 
        image={image1} 
        title="Know About Astrology" 
        description="This is a description for the first card." 
      />
      <Card 
        image={image2} 
        title="Chart Comparisons" 
        description="This is a description for the second card." 
      />
      <Card 
        image={image3} 
        title="Ultimate Guide" 
        description="This is a description for the third card." 
      />
    </div>
  );
};

export default AstrologyComponent2;
