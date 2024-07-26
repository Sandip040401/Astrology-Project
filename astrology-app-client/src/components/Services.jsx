import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import image1 from '../assets/Services/readings.jpeg';
import image2 from '../assets/Services/compatibility.jpeg';
import image3 from '../assets/Services/family_problem.jpeg';
import image4 from '../assets/Services/good_times.jpeg';
import image5 from '../assets/Services/janam_kundli.jpeg';
import image6 from '../assets/Services/job_problem.jpeg';
import image7 from '../assets/Services/love_problems.jpeg';

const services = () => {
  const services = [
    {
      title: 'Zodiac Readings',
      description: 'Get personalized zodiac readings based on your birth date and time.',
      imageUrl: image1, // Use the imported image
    },
    {
      title: 'Compatibility Reports',
      description: 'Discover your compatibility with other zodiac signs for relationships and friendships.',
      imageUrl: image2,
    },
    {
      title: 'Love Problems',
      description: 'Discover your compatibility with other zodiac signs for relationships and friendships.',
      imageUrl: image7,
    },
    {
      title: 'family Problems',
      description: 'Discover your compatibility with other zodiac signs for relationships and friendships.',
      imageUrl: image3,
    },
    {
      title: 'Job Problems',
      description: 'Discover your compatibility with other zodiac signs for relationships and friendships.',
      imageUrl: image6,
    },
    {
      title: 'Janam Kundli',
      description: 'Discover your compatibility with other zodiac signs for relationships and friendships.',
      imageUrl: image5,
    },
    {
      title: 'Subh Mahurat',
      description: 'Discover your compatibility with other zodiac signs for relationships and friendships.',
      imageUrl: image4,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="py-8 bg-gradient-to-r from-gray-900 to-black text-white">
        <h2 className="text-3xl font-bold p-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 bg-gradient-to-r from-gray-600 to-black text-white">
              <img src={service.imageUrl} alt={service.title} className="mb-4 rounded-lg" />
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: "Kanit, sans-serif"}}>{service.title}</h3>
              <p className="text-gray-300 py-3">{service.description}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Know More
           </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default services;
