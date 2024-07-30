import zodiacData from '../data/zodiacData.js';

export const generateHoroscope = (req, res) => {
  const { name, dob, timeOfBirth, placeOfBirth } = req.body;
  const formattedDate = new Date(dob).toLocaleDateString();

  try {
    const birthDate = new Date(dob);
    const month = birthDate.getMonth() + 1; // Months are 0-indexed in JavaScript
    const day = birthDate.getDate();
    const zodiacSign = getZodiacSign(day, month);

    const horoscope = `
      Hello ${name},
      
      Based on your birth date of ${formattedDate}, time of birth ${timeOfBirth}, and your location at:
      Place of Birth: ${placeOfBirth}
      
      Today's horoscope:
      
      Zodiac Sign: ${zodiacData[zodiacSign].name}
      
      Advantages:
      ${zodiacData[zodiacSign].good_traits.join('\n')}
      
      Disadvantages:
      ${zodiacData[zodiacSign].bad_traits.join('\n')}
      
      Personality:
      ${zodiacData[zodiacSign].personality.join('\n')}
      
      Powers:
      ${zodiacData[zodiacSign].powers.join('\n')}
      
      Weaknesses:
      ${zodiacData[zodiacSign].weaknesses.join('\n')}
    `;

    res.status(200).json({ horoscope: horoscope.trim(), zodiacSign: zodiacData[zodiacSign] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to generate horoscope' });
  }
};

const getZodiacSign = (day, month) => {
  if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) return "Aquarius";
  if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return "Pisces";
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) return "Aries";
  if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) return "Taurus";
  if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return "Gemini";
  if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return "Cancer";
  if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) return "Leo";
  if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) return "Virgo";
  if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) return "Libra";
  if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) return "Scorpio";
  if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) return "Sagittarius";
  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) return "Capricorn";
};
