import React from 'react';

const Meter = ({ value, label, description }) => {
  // Ensure the value is between 0 and 100
  const percentage = Math.min(Math.max(value, 0), 100);

  // Function to determine color based on percentage
  const getColor = (percentage) => {
    if (percentage >= 90) return 'rgb(0, 255, 0)'; // Green
    if (percentage >= 80) return 'rgb(0, 204, 255)'; // Light Blue
    if (percentage >= 70) return 'rgb(255, 204, 0)'; // Yellow
    if (percentage >= 60) return 'rgb(255, 102, 102)'; // Light Red
    return 'rgb(255, 0, 0)'; // Red
  };

  // Generate color for the progress bar
  const progressColor = getColor(percentage);

  return (
    <div className="mb-6 p-4 bg-gray-900 rounded-lg shadow-lg border border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-xl font-semibold text-white">{label}</h4>
        <span className="text-lg font-medium text-gray-300">{percentage}%</span>
      </div>
      <div className="relative h-6 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full"
          style={{ 
            width: `${percentage}%`,
            backgroundColor: progressColor,
            transition: 'width 0.5s ease-in-out' // Smooth transition effect
          }}
        />
      </div>
      <p className="mt-2 text-white">{description}</p>
    </div>
  );
};

export default Meter;
