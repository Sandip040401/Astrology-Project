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
    <div className="bg-transparent border border-gray-300 shadow-lg rounded-lg p-4 m-2 flex flex-col items-center transition-transform transform hover:scale-105" style={{ width: '200px' }}>
      <img src={image} alt={title} className="w-24 h-24 mb-4 opacity-75 invert"/>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const ZodiacSign = () => {
  return (
    <div className="p-2 bg-gradient-to-r from-gray-900 to-black text-white">
      <h4 className="text-xl font-bold text-center mb-4">Zodiac Sing</h4>
      <h1 className="text-5xl font-bold text-center mb-4">Know Yourself Through Your Sign</h1>
      <p  className=" text-center mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nemo delectus voluptatibus saepe dignissimos?</p>
      <div className="flex justify-center flex-wrap">
        <Card 
          image={aries} 
          title="Aries" 
          description="Mar 21 - Apr 19" 
        />
        <Card 
          image={taurus} 
          title="Taurus" 
          description="APr 20 - May 20" 
        />
        <Card 
          image={gemini} 
          title="Gemini" 
          description="May 21 - Jun 21" 
        /><Card 
          image={cancer} 
          title="Cancer" 
          description="jun 21 - Jul 22" 
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
          description="Sep 23 - Oct 222" 
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
          description="Dec 22 -Jan 19" 
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
