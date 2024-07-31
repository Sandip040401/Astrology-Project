const kundliData = {
    "Varna": {
      "description": "Varna Koota represents the spiritual compatibility of the couple and is related to the ego levels.",
      "areaOfLife": "Work, Career",
      "meaning": "The classification of a person based on the spiritual development and work-related nature.",
      "points": 1
    },
    "Vashya": {
      "description": "Vashya Koota signifies mutual attraction, control in marriage and also calculates power equation.",
      "areaOfLife": "Control, Influence",
      "meaning": "Indicates the level of attraction and control between partners.",
      "points": 2
    },
    "Tara": {
      "description": "Tara Koota represents the health and well-being of the couple.",
      "areaOfLife": "Health, Well-being",
      "meaning": "Indicates the compatibility of birth stars.",
      "points": 3
    },
    "Yoni": {
      "description": "Yoni Koota signifies sexual compatibility and physical attraction between the couple.",
      "areaOfLife": "Sexual Compatibility",
      "meaning": "Indicates the sexual nature and compatibility of the couple.",
      "points": 4
    },
    "Graha Maitri": {
      "description": "Graha Maitri Koota represents the intellectual and mental compatibility of the couple.",
      "areaOfLife": "Intellectual Compatibility",
      "meaning": "Indicates the mental and intellectual harmony between the couple.",
      "points": 5
    },
    "Gana": {
      "description": "Gana Koota represents the temperament and behavior compatibility of the couple.",
      "areaOfLife": "Temperament, Behavior",
      "meaning": "Indicates the nature and behavior compatibility between the couple.",
      "points": 6
    },
    "Bhakoot": {
      "description": "Bhakoot Koota represents the emotional compatibility and family harmony of the couple.",
      "areaOfLife": "Emotional Compatibility",
      "meaning": "Indicates the emotional bonding and family harmony.",
      "points": 7
    },
    "Nadi": {
      "description": "Nadi Koota signifies the genetic compatibility and health of the progeny.",
      "areaOfLife": "Genetic Compatibility",
      "meaning": "Indicates the health and genetic compatibility of the couple.",
      "points": 8
    },
  };
  
// Function to determine zodiac sign from DOB
const getZodiacSign = (dob) => {
    const date = new Date(dob);
    const month = date.getUTCMonth() + 1; // Months are zero-based
    const day = date.getUTCDate();
  
    // Zodiac sign determination based on DOB
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      return "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      return "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      return "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      return "Capricorn";
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      return "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      return "Pisces";
    }
    return "Unknown";
  };
  

  const compatibilityScores = {
    "Varna": {
        "Aries": { "Aries": 0.9, "Taurus": 0.6, "Gemini": 0.8, "Cancer": 0.5, "Leo": 0.7, "Virgo": 0.4, "Libra": 0.7, "Scorpio": 0.5, "Sagittarius": 0.8, "Capricorn": 0.4, "Aquarius": 0.7, "Pisces": 0.5 },
        "Taurus": { "Aries": 0.6, "Taurus": 0.9, "Gemini": 0.7, "Cancer": 0.6, "Leo": 0.5, "Virgo": 0.8, "Libra": 0.6, "Scorpio": 0.7, "Sagittarius": 0.5, "Capricorn": 0.7, "Aquarius": 0.6, "Pisces": 0.8 },
        "Gemini": { "Aries": 0.8, "Taurus": 0.7, "Gemini": 0.9, "Cancer": 0.4, "Leo": 0.6, "Virgo": 0.7, "Libra": 0.8, "Scorpio": 0.5, "Sagittarius": 0.8, "Capricorn": 0.5, "Aquarius": 0.9, "Pisces": 0.4 },
        "Cancer": { "Aries": 0.5, "Taurus": 0.6, "Gemini": 0.4, "Cancer": 0.9, "Leo": 0.5, "Virgo": 0.6, "Libra": 0.5, "Scorpio": 0.8, "Sagittarius": 0.4, "Capricorn": 0.7, "Aquarius": 0.5, "Pisces": 0.9 },
        "Leo": { "Aries": 0.7, "Taurus": 0.5, "Gemini": 0.6, "Cancer": 0.5, "Leo": 0.9, "Virgo": 0.4, "Libra": 0.8, "Scorpio": 0.6, "Sagittarius": 0.9, "Capricorn": 0.5, "Aquarius": 0.6, "Pisces": 0.5 },
        "Virgo": { "Aries": 0.4, "Taurus": 0.8, "Gemini": 0.7, "Cancer": 0.6, "Leo": 0.4, "Virgo": 0.9, "Libra": 0.5, "Scorpio": 0.6, "Sagittarius": 0.4, "Capricorn": 0.8, "Aquarius": 0.6, "Pisces": 0.5 },
        "Libra": { "Aries": 0.7, "Taurus": 0.6, "Gemini": 0.8, "Cancer": 0.5, "Leo": 0.8, "Virgo": 0.5, "Libra": 0.9, "Scorpio": 0.4, "Sagittarius": 0.9, "Capricorn": 0.6, "Aquarius": 0.8, "Pisces": 0.4 },
        "Scorpio": { "Aries": 0.5, "Taurus": 0.7, "Gemini": 0.5, "Cancer": 0.8, "Leo": 0.6, "Virgo": 0.6, "Libra": 0.4, "Scorpio": 0.9, "Sagittarius": 0.5, "Capricorn": 0.7, "Aquarius": 0.5, "Pisces": 0.8 },
        "Sagittarius": { "Aries": 0.8, "Taurus": 0.5, "Gemini": 0.8, "Cancer": 0.4, "Leo": 0.9, "Virgo": 0.4, "Libra": 0.9, "Scorpio": 0.5, "Sagittarius": 0.9, "Capricorn": 0.5, "Aquarius": 0.8, "Pisces": 0.4 },
        "Capricorn": { "Aries": 0.4, "Taurus": 0.7, "Gemini": 0.5, "Cancer": 0.7, "Leo": 0.5, "Virgo": 0.8, "Libra": 0.6, "Scorpio": 0.7, "Sagittarius": 0.5, "Capricorn": 0.9, "Aquarius": 0.6, "Pisces": 0.8 },
        "Aquarius": { "Aries": 0.7, "Taurus": 0.6, "Gemini": 0.9, "Cancer": 0.5, "Leo": 0.6, "Virgo": 0.6, "Libra": 0.8, "Scorpio": 0.5, "Sagittarius": 0.8, "Capricorn": 0.6, "Aquarius": 0.9, "Pisces": 0.5 },
        "Pisces": { "Aries": 0.5, "Taurus": 0.8, "Gemini": 0.4, "Cancer": 0.9, "Leo": 0.5, "Virgo": 0.5, "Libra": 0.4, "Scorpio": 0.8, "Sagittarius": 0.4, "Capricorn": 0.8, "Aquarius": 0.5, "Pisces": 0.9 }
    },
    "Vashya": {
        "Aries": { "Aries": 2, "Taurus": 1.5, "Gemini": 2, "Cancer": 1, "Leo": 2, "Virgo": 1.5, "Libra": 2, "Scorpio": 1.5, "Sagittarius": 2, "Capricorn": 1, "Aquarius": 2, "Pisces": 1.5 },
        "Taurus": { "Aries": 1.5, "Taurus": 2, "Gemini": 1.5, "Cancer": 2, "Leo": 1, "Virgo": 2, "Libra": 1.5, "Scorpio": 2, "Sagittarius": 1, "Capricorn": 2, "Aquarius": 1.5, "Pisces": 2 },
        "Gemini": { "Aries": 2, "Taurus": 1.5, "Gemini": 2, "Cancer": 1, "Leo": 2, "Virgo": 1.5, "Libra": 2, "Scorpio": 1.5, "Sagittarius": 2, "Capricorn": 1, "Aquarius": 2, "Pisces": 1.5 },
        "Cancer": { "Aries": 1, "Taurus": 2, "Gemini": 1.5, "Cancer": 2, "Leo": 1, "Virgo": 2, "Libra": 1.5, "Scorpio": 2, "Sagittarius": 1, "Capricorn": 2, "Aquarius": 1.5, "Pisces": 2 },
        "Leo": { "Aries": 2, "Taurus": 1.5, "Gemini": 2, "Cancer": 1, "Leo": 2, "Virgo": 1.5, "Libra": 2, "Scorpio": 1.5, "Sagittarius": 2, "Capricorn": 1, "Aquarius": 2, "Pisces": 1.5 },
        "Virgo": { "Aries": 1.5, "Taurus": 2, "Gemini": 1.5, "Cancer": 2, "Leo": 1.5, "Virgo": 2, "Libra": 1.5, "Scorpio": 2, "Sagittarius": 1.5, "Capricorn": 2, "Aquarius": 1, "Pisces": 2 },
        "Libra": { "Aries": 2, "Taurus": 1.5, "Gemini": 2, "Cancer": 1.5, "Leo": 2, "Virgo": 1.5, "Libra": 2, "Scorpio": 1.5, "Sagittarius": 2, "Capricorn": 1.5, "Aquarius": 2, "Pisces": 1.5 },
        "Scorpio": { "Aries": 1.5, "Taurus": 2, "Gemini": 1.5, "Cancer": 2, "Leo": 1.5, "Virgo": 2, "Libra": 1.5, "Scorpio": 2, "Sagittarius": 1.5, "Capricorn": 2, "Aquarius": 1, "Pisces": 2 },
        "Sagittarius": { "Aries": 2, "Taurus": 1.5, "Gemini": 2, "Cancer": 1, "Leo": 2, "Virgo": 1.5, "Libra": 2, "Scorpio": 1.5, "Sagittarius": 2, "Capricorn": 1, "Aquarius": 2, "Pisces": 1.5 },
        "Capricorn": { "Aries": 1, "Taurus": 2, "Gemini": 1.5, "Cancer": 2, "Leo": 1.5, "Virgo": 2, "Libra": 1.5, "Scorpio": 2, "Sagittarius": 1.5, "Capricorn": 2, "Aquarius": 1.5, "Pisces": 2 },
        "Aquarius": { "Aries": 2, "Taurus": 1.5, "Gemini": 2, "Cancer": 1.5, "Leo": 2, "Virgo": 1.5, "Libra": 2, "Scorpio": 1.5, "Sagittarius": 2, "Capricorn": 1.5, "Aquarius": 2, "Pisces": 1.5 },
        "Pisces": { "Aries": 1.5, "Taurus": 2, "Gemini": 1.5, "Cancer": 2, "Leo": 1.5, "Virgo": 2, "Libra": 1.5, "Scorpio": 2, "Sagittarius": 1.5, "Capricorn": 2, "Aquarius": 1.5, "Pisces": 2 }
    },
    "Tara": {
        "Aries": { "Aries": 2, "Taurus": 3, "Gemini": 1.5, "Cancer": 3, "Leo": 2, "Virgo": 1, "Libra": 1, "Scorpio": 3, "Sagittarius": 2, "Capricorn": 1, "Aquarius": 3, "Pisces": 1.5 },
        "Taurus": { "Aries": 3, "Taurus": 2, "Gemini": 1, "Cancer": 3, "Leo": 1, "Virgo": 2, "Libra": 3, "Scorpio": 2, "Sagittarius": 1, "Capricorn": 3, "Aquarius": 2, "Pisces": 1 },
        "Gemini": { "Aries": 1.5, "Taurus": 1, "Gemini": 2, "Cancer": 1, "Leo": 3, "Virgo": 2, "Libra": 3, "Scorpio": 1.5, "Sagittarius": 2, "Capricorn": 1, "Aquarius": 3, "Pisces": 1.5 },
        "Cancer": { "Aries": 3, "Taurus": 3, "Gemini": 1, "Cancer": 2, "Leo": 1.5, "Virgo": 3, "Libra": 1, "Scorpio": 2, "Sagittarius": 3, "Capricorn": 1, "Aquarius": 2, "Pisces": 2 },
        "Leo": { "Aries": 2, "Taurus": 1, "Gemini": 3, "Cancer": 1.5, "Leo": 2, "Virgo": 1, "Libra": 3, "Scorpio": 2, "Sagittarius": 3, "Capricorn": 1.5, "Aquarius": 2, "Pisces": 1.5 },
        "Virgo": { "Aries": 1, "Taurus": 2, "Gemini": 2, "Cancer": 3, "Leo": 1, "Virgo": 2, "Libra": 1.5, "Scorpio": 3, "Sagittarius": 1, "Capricorn": 3, "Aquarius": 2, "Pisces": 1 },
        "Libra": { "Aries": 1, "Taurus": 3, "Gemini": 3, "Cancer": 1, "Leo": 3, "Virgo": 1.5, "Libra": 2, "Scorpio": 2, "Sagittarius": 1.5, "Capricorn": 3, "Aquarius": 1.5, "Pisces": 2 },
        "Scorpio": { "Aries": 3, "Taurus": 2, "Gemini": 1.5, "Cancer": 2, "Leo": 2, "Virgo": 3, "Libra": 2, "Scorpio": 2, "Sagittarius": 3, "Capricorn": 1, "Aquarius": 2, "Pisces": 1 },
        "Sagittarius": { "Aries": 2, "Taurus": 1, "Gemini": 2, "Cancer": 3, "Leo": 3, "Virgo": 1, "Libra": 1.5, "Scorpio": 3, "Sagittarius": 2, "Capricorn": 1.5, "Aquarius": 3, "Pisces": 2 },
        "Capricorn": { "Aries": 1, "Taurus": 3, "Gemini": 1, "Cancer": 1, "Leo": 1.5, "Virgo": 3, "Libra": 3, "Scorpio": 1, "Sagittarius": 1.5, "Capricorn": 2, "Aquarius": 3, "Pisces": 2 },
        "Aquarius": { "Aries": 3, "Taurus": 2, "Gemini": 3, "Cancer": 2, "Leo": 2, "Virgo": 2, "Libra": 1.5, "Scorpio": 2, "Sagittarius": 3, "Capricorn": 1.5, "Aquarius": 2, "Pisces": 1.5 },
        "Pisces": { "Aries": 1.5, "Taurus": 1, "Gemini": 1.5, "Cancer": 2, "Leo": 1.5, "Virgo": 1, "Libra": 2, "Scorpio": 1, "Sagittarius": 2, "Capricorn": 2, "Aquarius": 1.5, "Pisces": 2 }
    },
    "Yoni": {
        "Aries": { "Aries": 4, "Taurus": 3, "Gemini": 2.5, "Cancer": 4, "Leo": 2, "Virgo": 1, "Libra": 2, "Scorpio": 3.5, "Sagittarius": 4, "Capricorn": 2, "Aquarius": 3.5, "Pisces": 2.5 },
        "Taurus": { "Aries": 3, "Taurus": 4, "Gemini": 2, "Cancer": 4, "Leo": 1.5, "Virgo": 3, "Libra": 2, "Scorpio": 3.5, "Sagittarius": 1.5, "Capricorn": 4, "Aquarius": 3, "Pisces": 2 },
        "Gemini": { "Aries": 2.5, "Taurus": 2, "Gemini": 4, "Cancer": 2, "Leo": 3.5, "Virgo": 3, "Libra": 4, "Scorpio": 2.5, "Sagittarius": 4, "Capricorn": 2, "Aquarius": 4, "Pisces": 2.5 },
        "Cancer": { "Aries": 4, "Taurus": 4, "Gemini": 2, "Cancer": 4, "Leo": 2.5, "Virgo": 4, "Libra": 2, "Scorpio": 4, "Sagittarius": 4, "Capricorn": 2, "Aquarius": 3, "Pisces": 3 },
        "Leo": { "Aries": 2, "Taurus": 1.5, "Gemini": 3.5, "Cancer": 2.5, "Leo": 4, "Virgo": 2, "Libra": 4, "Scorpio": 3.5, "Sagittarius": 4, "Capricorn": 2.5, "Aquarius": 4, "Pisces": 2.5 },
        "Virgo": { "Aries": 1, "Taurus": 3, "Gemini": 3, "Cancer": 4, "Leo": 2, "Virgo": 4, "Libra": 2.5, "Scorpio": 4, "Sagittarius": 1.5, "Capricorn": 4, "Aquarius": 3.5, "Pisces": 2 },
        "Libra": { "Aries": 2, "Taurus": 2, "Gemini": 4, "Cancer": 2, "Leo": 4, "Virgo": 2.5, "Libra": 4, "Scorpio": 3.5, "Sagittarius": 2.5, "Capricorn": 3.5, "Aquarius": 4, "Pisces": 2 },
        "Scorpio": { "Aries": 3.5, "Taurus": 3.5, "Gemini": 2.5, "Cancer": 4, "Leo": 3.5, "Virgo": 4, "Libra": 3.5, "Scorpio": 4, "Sagittarius": 3.5, "Capricorn": 2, "Aquarius": 3.5, "Pisces": 2 },
        "Sagittarius": { "Aries": 4, "Taurus": 1.5, "Gemini": 4, "Cancer": 4, "Leo": 4, "Virgo": 1.5, "Libra": 2.5, "Scorpio": 3.5, "Sagittarius": 4, "Capricorn": 2, "Aquarius": 4, "Pisces": 2.5 },
        "Capricorn": { "Aries": 2, "Taurus": 4, "Gemini": 2, "Cancer": 2, "Leo": 2.5, "Virgo": 4, "Libra": 3.5, "Scorpio": 2, "Sagittarius": 2, "Capricorn": 4, "Aquarius": 3.5, "Pisces": 3 },
        "Aquarius": { "Aries": 3.5, "Taurus": 3, "Gemini": 4, "Cancer": 3, "Leo": 4, "Virgo": 3.5, "Libra": 4, "Scorpio": 3.5, "Sagittarius": 4, "Capricorn": 3.5, "Aquarius": 4, "Pisces": 2.5 },
        "Pisces": { "Aries": 2.5, "Taurus": 2, "Gemini": 2.5, "Cancer": 3, "Leo": 2.5, "Virgo": 2, "Libra": 2, "Scorpio": 2, "Sagittarius": 2.5, "Capricorn": 3, "Aquarius": 2.5, "Pisces": 4 }
    },
        "Graha Maitri": {
            "Aries": { "Aries": 5, "Taurus": 3, "Gemini": 4, "Cancer": 2, "Leo": 5, "Virgo": 3, "Libra": 4, "Scorpio": 3, "Sagittarius": 5, "Capricorn": 4, "Aquarius": 2, "Pisces": 3 },
            "Taurus": { "Aries": 3, "Taurus": 5, "Gemini": 4, "Cancer": 5, "Leo": 3, "Virgo": 4, "Libra": 2, "Scorpio": 3, "Sagittarius": 3, "Capricorn": 5, "Aquarius": 4, "Pisces": 5 },
            "Gemini": { "Aries": 4, "Taurus": 4, "Gemini": 5, "Cancer": 2, "Leo": 5, "Virgo": 3, "Libra": 5, "Scorpio": 4, "Sagittarius": 4, "Capricorn": 3, "Aquarius": 5, "Pisces": 2 },
            "Cancer": { "Aries": 2, "Taurus": 5, "Gemini": 2, "Cancer": 5, "Leo": 4, "Virgo": 3, "Libra": 4, "Scorpio": 5, "Sagittarius": 3, "Capricorn": 4, "Aquarius": 2, "Pisces": 4 },
            "Leo": { "Aries": 5, "Taurus": 3, "Gemini": 5, "Cancer": 4, "Leo": 5, "Virgo": 2, "Libra": 5, "Scorpio": 4, "Sagittarius": 5, "Capricorn": 3, "Aquarius": 5, "Pisces": 2 },
            "Virgo": { "Aries": 3, "Taurus": 4, "Gemini": 3, "Cancer": 3, "Leo": 2, "Virgo": 5, "Libra": 3, "Scorpio": 2, "Sagittarius": 3, "Capricorn": 4, "Aquarius": 3, "Pisces": 4 },
            "Libra": { "Aries": 4, "Taurus": 2, "Gemini": 5, "Cancer": 4, "Leo": 5, "Virgo": 3, "Libra": 5, "Scorpio": 3, "Sagittarius": 3, "Capricorn": 4, "Aquarius": 5, "Pisces": 3 },
            "Scorpio": { "Aries": 3, "Taurus": 3, "Gemini": 4, "Cancer": 5, "Leo": 4, "Virgo": 2, "Libra": 3, "Scorpio": 5, "Sagittarius": 3, "Capricorn": 2, "Aquarius": 3, "Pisces": 4 },
            "Sagittarius": { "Aries": 5, "Taurus": 3, "Gemini": 4, "Cancer": 3, "Leo": 5, "Virgo": 2, "Libra": 3, "Scorpio": 3, "Sagittarius": 5, "Capricorn": 4, "Aquarius": 4, "Pisces": 2 },
            "Capricorn": { "Aries": 4, "Taurus": 5, "Gemini": 3, "Cancer": 4, "Leo": 3, "Virgo": 4, "Libra": 4, "Scorpio": 2, "Sagittarius": 4, "Capricorn": 5, "Aquarius": 3, "Pisces": 4 },
            "Aquarius": { "Aries": 2, "Taurus": 4, "Gemini": 5, "Cancer": 2, "Leo": 5, "Virgo": 3, "Libra": 5, "Scorpio": 3, "Sagittarius": 4, "Capricorn": 3, "Aquarius": 5, "Pisces": 2 },
            "Pisces": { "Aries": 3, "Taurus": 5, "Gemini": 2, "Cancer": 4, "Leo": 2, "Virgo": 4, "Libra": 3, "Scorpio": 4, "Sagittarius": 2, "Capricorn": 4, "Aquarius": 2, "Pisces": 5 }
        },
        "Gana": {
            "Aries": { "Aries": 6, "Taurus": 5, "Gemini": 4, "Cancer": 6, "Leo": 5, "Virgo": 4, "Libra": 6, "Scorpio": 5, "Sagittarius": 6, "Capricorn": 4, "Aquarius": 5, "Pisces": 4 },
            "Taurus": { "Aries": 5, "Taurus": 6, "Gemini": 4, "Cancer": 6, "Leo": 4, "Virgo": 6, "Libra": 5, "Scorpio": 4, "Sagittarius": 5, "Capricorn": 6, "Aquarius": 4, "Pisces": 5 },
            "Gemini": { "Aries": 4, "Taurus": 4, "Gemini": 6, "Cancer": 5, "Leo": 4, "Virgo": 5, "Libra": 6, "Scorpio": 4, "Sagittarius": 6, "Capricorn": 5, "Aquarius": 4, "Pisces": 4 },
            "Cancer": { "Aries": 6, "Taurus": 6, "Gemini": 5, "Cancer": 6, "Leo": 5, "Virgo": 4, "Libra": 6, "Scorpio": 5, "Sagittarius": 4, "Capricorn": 5, "Aquarius": 6, "Pisces": 5 },
            "Leo": { "Aries": 5, "Taurus": 4, "Gemini": 6, "Cancer": 5, "Leo": 6, "Virgo": 5, "Libra": 6, "Scorpio": 4, "Sagittarius": 6, "Capricorn": 4, "Aquarius": 5, "Pisces": 5 },
            "Virgo": { "Aries": 4, "Taurus": 6, "Gemini": 5, "Cancer": 4, "Leo": 5, "Virgo": 6, "Libra": 4, "Scorpio": 5, "Sagittarius": 4, "Capricorn": 5, "Aquarius": 4, "Pisces": 4 },
            "Libra": { "Aries": 6, "Taurus": 5, "Gemini": 6, "Cancer": 6, "Leo": 6, "Virgo": 4, "Libra": 6, "Scorpio": 4, "Sagittarius": 5, "Capricorn": 4, "Aquarius": 6, "Pisces": 4 },
            "Scorpio": { "Aries": 5, "Taurus": 4, "Gemini": 4, "Cancer": 5, "Leo": 4, "Virgo": 5, "Libra": 4, "Scorpio": 6, "Sagittarius": 4, "Capricorn": 5, "Aquarius": 4, "Pisces": 6 },
            "Sagittarius": { "Aries": 6, "Taurus": 5, "Gemini": 6, "Cancer": 4, "Leo": 6, "Virgo": 4, "Libra": 5, "Scorpio": 4, "Sagittarius": 6, "Capricorn": 4, "Aquarius": 5, "Pisces": 4 },
            "Capricorn": { "Aries": 4, "Taurus": 6, "Gemini": 5, "Cancer": 5, "Leo": 4, "Virgo": 5, "Libra": 4, "Scorpio": 5, "Sagittarius": 4, "Capricorn": 6, "Aquarius": 4, "Pisces": 5 },
            "Aquarius": { "Aries": 5, "Taurus": 4, "Gemini": 4, "Cancer": 6, "Leo": 5, "Virgo": 4, "Libra": 6, "Scorpio": 4, "Sagittarius": 5, "Capricorn": 4, "Aquarius": 6, "Pisces": 4 },
            "Pisces": { "Aries": 4, "Taurus": 5, "Gemini": 4, "Cancer": 5, "Leo": 5, "Virgo": 4, "Libra": 4, "Scorpio": 6, "Sagittarius": 4, "Capricorn": 5, "Aquarius": 4, "Pisces": 6 }
        },
        "Bhakoot": {
            "Aries": { "Aries": 7, "Taurus": 5, "Gemini": 6, "Cancer": 5, "Leo": 7, "Virgo": 5, "Libra": 6, "Scorpio": 4, "Sagittarius": 7, "Capricorn": 5, "Aquarius": 6, "Pisces": 4 },
            "Taurus": { "Aries": 5, "Taurus": 7, "Gemini": 5, "Cancer": 6, "Leo": 5, "Virgo": 6, "Libra": 5, "Scorpio": 5, "Sagittarius": 5, "Capricorn": 6, "Aquarius": 5, "Pisces": 6 },
            "Gemini": { "Aries": 6, "Taurus": 5, "Gemini": 7, "Cancer": 4, "Leo": 6, "Virgo": 5, "Libra": 6, "Scorpio": 5, "Sagittarius": 6, "Capricorn": 5, "Aquarius": 6, "Pisces": 4 },
            "Cancer": { "Aries": 5, "Taurus": 6, "Gemini": 4, "Cancer": 7, "Leo": 5, "Virgo": 5, "Libra": 5, "Scorpio": 6, "Sagittarius": 4, "Capricorn": 5, "Aquarius": 5, "Pisces": 6 },
            "Leo": { "Aries": 7, "Taurus": 5, "Gemini": 6, "Cancer": 5, "Leo": 7, "Virgo": 4, "Libra": 7, "Scorpio": 4, "Sagittarius": 7, "Capricorn": 5, "Aquarius": 6, "Pisces": 5 },
            "Virgo": { "Aries": 5, "Taurus": 6, "Gemini": 5, "Cancer": 5, "Leo": 4, "Virgo": 7, "Libra": 5, "Scorpio": 5, "Sagittarius": 4, "Capricorn": 6, "Aquarius": 5, "Pisces": 4 },
            "Libra": { "Aries": 6, "Taurus": 5, "Gemini": 6, "Cancer": 5, "Leo": 7, "Virgo": 5, "Libra": 7, "Scorpio": 4, "Sagittarius": 6, "Capricorn": 5, "Aquarius": 6, "Pisces": 4 },
            "Scorpio": { "Aries": 4, "Taurus": 5, "Gemini": 5, "Cancer": 6, "Leo": 4, "Virgo": 5, "Libra": 4, "Scorpio": 7, "Sagittarius": 5, "Capricorn": 4, "Aquarius": 5, "Pisces": 5 },
            "Sagittarius": { "Aries": 7, "Taurus": 5, "Gemini": 6, "Cancer": 4, "Leo": 7, "Virgo": 4, "Libra": 6, "Scorpio": 5, "Sagittarius": 7, "Capricorn": 5, "Aquarius": 6, "Pisces": 4 },
            "Capricorn": { "Aries": 5, "Taurus": 6, "Gemini": 5, "Cancer": 5, "Leo": 5, "Virgo": 6, "Libra": 5, "Scorpio": 4, "Sagittarius": 5, "Capricorn": 7, "Aquarius": 5, "Pisces": 6 },
            "Aquarius": { "Aries": 6, "Taurus": 5, "Gemini": 6, "Cancer": 5, "Leo": 6, "Virgo": 5, "Libra": 6, "Scorpio": 5, "Sagittarius": 6, "Capricorn": 5, "Aquarius": 7, "Pisces": 5 },
            "Pisces": { "Aries": 4, "Taurus": 6, "Gemini": 4, "Cancer": 6, "Leo": 5, "Virgo": 4, "Libra": 4, "Scorpio": 5, "Sagittarius": 4, "Capricorn": 6, "Aquarius": 5, "Pisces": 7 }
        },
        "Nadi": {
            "Aries": { "Aries": 8, "Taurus": 6, "Gemini": 7, "Cancer": 6, "Leo": 8, "Virgo": 6, "Libra": 7, "Scorpio": 5, "Sagittarius": 8, "Capricorn": 6, "Aquarius": 7, "Pisces": 5 },
            "Taurus": { "Aries": 6, "Taurus": 8, "Gemini": 6, "Cancer": 7, "Leo": 6, "Virgo": 7, "Libra": 6, "Scorpio": 6, "Sagittarius": 6, "Capricorn": 7, "Aquarius": 6, "Pisces": 7 },
            "Gemini": { "Aries": 7, "Taurus": 6, "Gemini": 8, "Cancer": 5, "Leo": 7, "Virgo": 6, "Libra": 7, "Scorpio": 6, "Sagittarius": 7, "Capricorn": 6, "Aquarius": 7, "Pisces": 5 },
            "Cancer": { "Aries": 6, "Taurus": 7, "Gemini": 5, "Cancer": 8, "Leo": 6, "Virgo": 6, "Libra": 6, "Scorpio": 7, "Sagittarius": 5, "Capricorn": 6, "Aquarius": 6, "Pisces": 7 },
            "Leo": { "Aries": 8, "Taurus": 6, "Gemini": 7, "Cancer": 6, "Leo": 8, "Virgo": 5, "Libra": 8, "Scorpio": 5, "Sagittarius": 8, "Capricorn": 6, "Aquarius": 7, "Pisces": 6 },
            "Virgo": { "Aries": 6, "Taurus": 7, "Gemini": 6, "Cancer": 6, "Leo": 5, "Virgo": 8, "Libra": 6, "Scorpio": 5, "Sagittarius": 6, "Capricorn": 6, "Aquarius": 6, "Pisces": 5 },
            "Libra": { "Aries": 7, "Taurus": 6, "Gemini": 7, "Cancer": 6, "Leo": 8, "Virgo": 6, "Libra": 8, "Scorpio": 5, "Sagittarius": 7, "Capricorn": 6, "Aquarius": 7, "Pisces": 5 },
            "Scorpio": { "Aries": 5, "Taurus": 6, "Gemini": 6, "Cancer": 7, "Leo": 5, "Virgo": 5, "Libra": 5, "Scorpio": 8, "Sagittarius": 6, "Capricorn": 5, "Aquarius": 5, "Pisces": 6 },
            "Sagittarius": { "Aries": 8, "Taurus": 6, "Gemini": 7, "Cancer": 5, "Leo": 8, "Virgo": 5, "Libra": 7, "Scorpio": 6, "Sagittarius": 8, "Capricorn": 6, "Aquarius": 7, "Pisces": 5 },
            "Capricorn": { "Aries": 6, "Taurus": 7, "Gemini": 6, "Cancer": 6, "Leo": 6, "Virgo": 6, "Libra": 6, "Scorpio": 5, "Sagittarius": 6, "Capricorn": 8, "Aquarius": 6, "Pisces": 7 },
            "Aquarius": { "Aries": 7, "Taurus": 6, "Gemini": 7, "Cancer": 6, "Leo": 7, "Virgo": 6, "Libra": 7, "Scorpio": 5, "Sagittarius": 7, "Capricorn": 6, "Aquarius": 8, "Pisces": 6 },
            "Pisces": { "Aries": 5, "Taurus": 7, "Gemini": 5, "Cancer": 7, "Leo": 6, "Virgo": 5, "Libra": 5, "Scorpio": 6, "Sagittarius": 5, "Capricorn": 7, "Aquarius": 6, "Pisces": 8 }
        }    
}


// Function to calculate compatibility points based on zodiac signs and factor type
const calculateCompatibilityPoints = (boySign, girlSign, factorType) => {
    // Check if factor type exists in compatibilityScores
    if (compatibilityScores[factorType] && compatibilityScores[factorType][boySign]) {
      return compatibilityScores[factorType][boySign][girlSign] || 0;
    }
    return 0;
  };
  


  const formatDOB = (details) => {
    const { day, month, year, hour, minute, second } = details;
    // Assuming month is in short form (e.g., 'Jan', 'Feb')
    const monthIndex = new Date(Date.parse(month +" 1, 2021")).getMonth() + 1; // Convert month name to number
    return `${year}-${monthIndex.toString().padStart(2, '0')}-${day.padStart(2, '0')}T${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:${second.padStart(2, '0')}`;
};
  
  export const matchKundli = async (req, res) => {
    const { boyDetails, girlDetails } = req.body;

    // Formatting the dob fields
    const boyDOB = formatDOB(boyDetails);
    const girlDOB = formatDOB(girlDetails);
    
    // Getting zodiac signs
    const boyZodiac = getZodiacSign(boyDOB);
    const girlZodiac = getZodiacSign(girlDOB);

    const boy = { varna: boyZodiac, vashya: boyZodiac, tara: boyZodiac, yoni: boyZodiac, grahaMaitri: boyZodiac, gana: boyZodiac, bhakoot: boyZodiac, nadi: boyZodiac };
    const girl = { varna: girlZodiac, vashya: girlZodiac, tara: girlZodiac, yoni: girlZodiac, grahaMaitri: girlZodiac, gana: girlZodiac, bhakoot: girlZodiac, nadi: girlZodiac };
    

    // Define maximum points for each factor
    const maxPoints = {
        "Varna": 1,
        "Vashya": 2,
        "Tara": 3,
        "Yoni": 4,
        "Graha Maitri": 5,
        "Gana": 6,
        "Bhakoot": 7,
        "Nadi": 8
    };
        const calculatePoints = (boy, girl) => {
        const varnaPoints = Math.min(calculateCompatibilityPoints(boy.varna, girl.varna, "Varna"), 1);
        const vashyaPoints = Math.min(calculateCompatibilityPoints(boy.vashya, girl.vashya, "Vashya"), 2);
        const taraPoints = Math.min(calculateCompatibilityPoints(boy.tara, girl.tara, "Tara"), 3);
        const yoniPoints = Math.min(calculateCompatibilityPoints(boy.yoni, girl.yoni, "Yoni"), 4);
        const grahaMaitriPoints = Math.min(calculateCompatibilityPoints(boy.grahaMaitri, girl.grahaMaitri, "Graha Maitri"), 5);
        const ganaPoints = Math.min(calculateCompatibilityPoints(boy.gana, girl.gana, "Gana"), 6);
        const bhakootPoints = Math.min(calculateCompatibilityPoints(boy.bhakoot, girl.bhakoot, "Bhakoot"), 7);
        const nadiPoints = Math.min(calculateCompatibilityPoints(boy.nadi, girl.nadi, "Nadi"), 8);
      
      
    return [
        {
          attribute: "Varna",
          male: boy.varna,
          female: girl.varna,
          received: varnaPoints,
          outOf: kundliData["Varna"].points,
          areaOfLife: kundliData["Varna"].areaOfLife,
          description: kundliData["Varna"].description,
          meaning: kundliData["Varna"].meaning,
        },
        {
          attribute: "Vashya",
          male: boy.vashya,
          female: girl.vashya,
          received: vashyaPoints,
          outOf: kundliData["Vashya"].points,
          areaOfLife: kundliData["Vashya"].areaOfLife,
          description: kundliData["Vashya"].description,
          meaning: kundliData["Vashya"].meaning,
        },
        {
          attribute: "Tara",
          male: boy.tara,
          female: girl.tara,
          received: taraPoints,
          outOf: kundliData["Tara"].points,
          areaOfLife: kundliData["Tara"].areaOfLife,
          description: kundliData["Tara"].description,
          meaning: kundliData["Tara"].meaning,
        },
        {
          attribute: "Yoni",
          male: boy.yoni,
          female: girl.yoni,
          received: yoniPoints,
          outOf: kundliData["Yoni"].points,
          areaOfLife: kundliData["Yoni"].areaOfLife,
          description: kundliData["Yoni"].description,
          meaning: kundliData["Yoni"].meaning,
        },
        {
          attribute: "Graha Maitri",
          male: boy.grahaMaitri,
          female: girl.grahaMaitri,
          received: grahaMaitriPoints,
          outOf: kundliData["Graha Maitri"].points,
          areaOfLife: kundliData["Graha Maitri"].areaOfLife,
          description: kundliData["Graha Maitri"].description,
          meaning: kundliData["Graha Maitri"].meaning,
        },
        {
          attribute: "Gana",
          male: boy.gana,
          female: girl.gana,
          received: ganaPoints,
          outOf: kundliData["Gana"].points,
          areaOfLife: kundliData["Gana"].areaOfLife,
          description: kundliData["Gana"].description,
          meaning: kundliData["Gana"].meaning,
        },
        {
          attribute: "Bhakoot",
          male: boy.bhakoot,
          female: girl.bhakoot,
          received: bhakootPoints,
          outOf: kundliData["Bhakoot"].points,
          areaOfLife: kundliData["Bhakoot"].areaOfLife,
          description: kundliData["Bhakoot"].description,
          meaning: kundliData["Bhakoot"].meaning,
        },
        {
          attribute: "Nadi",
          male: boy.nadi,
          female: girl.nadi,
          received: nadiPoints,
          outOf: kundliData["Nadi"].points,
          areaOfLife: kundliData["Nadi"].areaOfLife,
          description: kundliData["Nadi"].description,
          meaning: kundliData["Nadi"].meaning,
        },
      ];
    };
  
    const boyKundli = {
      varna: boy.varna,
      vashya: boy.vashya,
      tara: boy.tara,
      yoni: boy.yoni,
      grahaMaitri: boy.grahaMaitri,
      gana: boy.gana,
      bhakoot: boy.bhakoot,
      nadi: boy.nadi,
    };
  
    const girlKundli = {
      varna: girl.varna,
      vashya: girl.vashya,
      tara: girl.tara,
      yoni: girl.yoni,
      grahaMaitri: girl.grahaMaitri,
      gana: girl.gana,
      bhakoot: girl.bhakoot,
      nadi: girl.nadi,
    };
  
    const result = calculatePoints(boyKundli, girlKundli);
    res.json({ result });
  };
  