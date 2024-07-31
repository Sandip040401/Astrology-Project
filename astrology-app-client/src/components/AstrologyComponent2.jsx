import React from 'react';
import image1 from '../assets/zodiac2.png';
import image2 from '../assets/constellations.png';
import image3 from '../assets/armillary.png'; // Adjust the paths as needed

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 w-64 sm:w-80">
      <img src={image} alt={title} className="w-24 h-24 mb-4 opacity-75 rounded-full"/>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const AstrologyComponent2 = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 to-black flex flex-wrap justify-center overflow-x-auto space-x-0 sm:space-x-4">
      <Card 
        image={image1} 
        title="Know About Astrology" 
        description="Discover the ancient art of astrology and how the stars influence our lives. Dive into the history, significance, and practice of astrology in today's world." 
      />
      <Card 
        image={image2} 
        title="Chart Comparisons" 
        description="Learn how to compare astrological charts and understand the compatibility between different zodiac signs. Perfect for those curious about relationships and connections." 
      />
      <Card 
        image={image3} 
        title="Ultimate Guide" 
        description="Your comprehensive guide to mastering astrology. From beginner basics to advanced techniques, this guide covers everything you need to know." 
      />
    </div>
  );
};

export default AstrologyComponent2;
