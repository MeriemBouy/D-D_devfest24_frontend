import React from 'react';

const LevelsChart = () => {
  // Sample levels data
  const levels = [
    { name: 'Energy', value: 70, color: '#8884d8' },
    { name: 'Temp', value: 85, color: '#82ca9d' },
    { name: 'Oil', value: 60, color: '#ffc658' },
    { name: 'Pressure', value: 90, color: '#ff7300' },
    { name: 'Force', value: 90, color: '#ff7300' },
    { name: 'Weld', value: 40, color: '#ff7300' },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {levels.map((level) => (
        <div key={level.name} className="flex items-center">
          <span className="w-1/4 text-gray-700">{level.name}</span>
          <div className="relative w-3/4 h-4 bg-gray-300  mb-6 rounded-full">
            <div
              className={`absolute h-full rounded-full`}
              style={{
                width: `${level.value}%`,
                backgroundColor: 'black',
              }}
            />
          </div>
          <span className="ml-2 text-gray-700">{level.value}%</span>
        </div>
      ))}
    </div>
  );
};

export default LevelsChart;
