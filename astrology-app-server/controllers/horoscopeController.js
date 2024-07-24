export const generateHoroscope = (req, res) => {
    const { name, dob, address } = req.body;
    const formattedDate = new Date(dob).toLocaleDateString();
    const { village, district, state, pincode } = address;


    try {
        const horoscopes = [
            "Today will bring new opportunities.",
            "You might face some challenges today.",
            "A great day for love and relationships.",
            "Focus on your health and well-being.",
            "You will find success in your career.",
        ];
        const randomIndex = Math.floor(Math.random() * horoscopes.length);
        const horoscopeMessage = horoscopes[randomIndex];

        const horoscope = `
            Hello ${name},
            
            Based on your birth date of ${formattedDate} and your location at:
            Village: ${village}
            District: ${district}
            State: ${state}
            Pincode: ${pincode}
            
            Today's horoscope: "${horoscopeMessage}"
        `;

        res.status(200).json({ horoscope: horoscope.trim() });
    } catch (error) {
        res.status(500).json({ message: 'Failed to generate horoscope' });
    }
};
