import React from 'react';

import aries from '../assets/zodiac/aries.png';
import taurus from '../assets/zodiac/taurus.png';
import gemini from '../assets/zodiac/gemini.png';
import cancer from '../assets/zodiac/cancer.png';
import leo from '../assets/zodiac/leo.png';
import virgo from '../assets/zodiac/virgo.png';
import libra from '../assets/zodiac/libra.png';
import scorpio from '../assets/zodiac/scorpio.png';
import sagittarius from '../assets/zodiac/sagittarius.png';
import capricorn from '../assets/zodiac/capricorn.png';
import aquarius from '../assets/zodiac/aquarius.png';
import pisces from '../assets/zodiac/pisces.png';

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-transparent border border-gray-300 shadow-lg rounded-lg p-6 m-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300" style={{ width: '200px' }}>
      <img src={image} alt={title} className="w-24 h-24 mb-4 opacity-75 invert"/>
      <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
      <p className="text-gray-400 text-center">{description}</p>
    </div>
  );
};

const ZodiacSign = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 to-black text-white"style={{fontFamily: "Kanit, sans-serif"}}>
      <h4 className="text-xl font-bold text-center mb-2">Zodiac Sign</h4>
      <h1 className="text-5xl font-bold text-center mb-6">Know Yourself Through Your Sign</h1>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        Discover the mysteries of the zodiac and how your star sign influences your personality, relationships, and life path. Explore the unique characteristics of each sign and gain insights into your own traits and tendencies.
      </p>
      <div className="flex justify-center flex-wrap">
        <Card 
          image={aries} 
          title="Aries" 
          description="Mar 21 - Apr 19" 
        />
        <Card 
          image={taurus} 
          title="Taurus" 
          description="Apr 20 - May 20" 
        />
        <Card 
          image={gemini} 
          title="Gemini" 
          description="May 21 - Jun 20" 
        />
        <Card 
          image={cancer} 
          title="Cancer" 
          description="Jun 21 - Jul 22" 
        />
        <Card 
          image={leo} 
          title="Leo" 
          description="Jul 23 - Aug 22" 
        />
        <Card 
          image={virgo} 
          title="Virgo" 
          description="Aug 23 - Sep 22" 
        />
        <Card 
          image={libra} 
          title="Libra" 
          description="Sep 23 - Oct 22" 
        />
        <Card 
          image={scorpio} 
          title="Scorpio" 
          description="Oct 23 - Nov 21" 
        />
        <Card 
          image={sagittarius} 
          title="Sagittarius" 
          description="Nov 22 - Dec 21" 
        />
        <Card 
          image={capricorn} 
          title="Capricorn" 
          description="Dec 22 - Jan 19" 
        />
        <Card 
          image={aquarius} 
          title="Aquarius" 
          description="Jan 20 - Feb 18" 
        />
        <Card 
          image={pisces} 
          title="Pisces" 
          description="Feb 19 - Mar 20" 
        />
      </div>
    </div>
  );
};

export default ZodiacSign;
