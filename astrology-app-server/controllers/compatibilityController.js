import compatibilityData from '../data/compatibilityData.js'; // Update path if needed

export const checkCompatibility = (req, res) => {
  const { sign1, sign2 } = req.params;

  // Ensure both signs are in lowercase for consistency
  const sign1Lower = sign1.toLowerCase();
  const sign2Lower = sign2.toLowerCase();

  // Find the compatibility data by checking only one direction
  const compatibility = compatibilityData.find(entry => 
    (entry.sign1.toLowerCase() === sign1Lower && entry.sign2.toLowerCase() === sign2Lower) ||
    (entry.sign1.toLowerCase() === sign2Lower && entry.sign2.toLowerCase() === sign1Lower)
  );

  if (compatibility) {
    // Convert raw scores to percentages and provide descriptive text
    const loveCompatibility = Math.min(Math.max(compatibility.loveCompatibilityScore, 0), 100);
    const sexualCompatibility = Math.min(Math.max(compatibility.sexualCompatibilityScore, 0), 100);
    const friendshipCompatibility = Math.min(Math.max(compatibility.friendshipCompatibilityScore, 0), 100);
    const communicationCompatibility = Math.min(Math.max(compatibility.communicationCompatibilityScore, 0), 100);

    // Provide descriptive text for each compatibility score
    const loveDescription = getDescription('love', compatibility.loveCompatibilityScore);
    const sexualDescription = getDescription('sexual', compatibility.sexualCompatibilityScore);
    const friendshipDescription = getDescription('friendship', compatibility.friendshipCompatibilityScore);
    const communicationDescription = getDescription('communication', compatibility.communicationCompatibilityScore);

    res.json({
      loveCompatibility,
      sexualCompatibility,
      friendshipCompatibility,
      communicationCompatibility,
      relationshipTips: compatibility.relationshipTips,
      descriptions: {
        love: loveDescription,
        sexual: sexualDescription,
        friendship: friendshipDescription,
        communication: communicationDescription
      }
    });
  } else {
    res.status(404).json({ message: 'Compatibility data not found' });
  }
};

// Helper function to provide descriptive text based on compatibility score
const getDescription = (type, score) => {
  if (score >= 80) {
    return `${capitalize(type)} compatibility is excellent; you likely have a strong connection.`;
  } else if (score >= 60) {
    return `${capitalize(type)} compatibility is good; you share a solid foundation but may have some differences.`;
  } else if (score >= 40) {
    return `${capitalize(type)} compatibility is average; you might need to work on understanding each other better.`;
  } else {
    return `${capitalize(type)} compatibility is low; significant effort may be required to build a connection.`;
  }
};

// Helper function to capitalize the first letter of a string
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
