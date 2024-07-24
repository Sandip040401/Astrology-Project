// api/astrologyService.js
import axios from 'axios';

const BASE_URL = 'https://horoscope-astrology.p.rapidapi.com';
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY; // Ensure this key is set in .env

export const fetchDailyHoroscope = async (zodiacSign) => {
    try {
        const response = await axios.get(`${BASE_URL}/daily/${zodiacSign}`, {
            headers: {
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com',
                'X-RapidAPI-Key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch daily horoscope');
    }
};


export const fetchWeeklyHoroscope = async (zodiacSign) => {
    try {
        const response = await axios.get(`${BASE_URL}/weekly/${zodiacSign}`, {
            headers: {
                'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com',
                'X-RapidAPI-Key': API_KEY
            }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch weekly horoscope');
    }
};
