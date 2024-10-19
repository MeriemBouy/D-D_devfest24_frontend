import React from 'react';
import BarChartComponent from '../../components/BarChart';
import LevelsChart from '../../components/LevelsChart'; // Import LevelsChart

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen p-4 overflow-y-auto md:flex-row">

      {/* Main Content */}
      <div className="flex-grow bg-gray-100">
        {/* First Row: 3 Cards */}
        <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
          <div className="relative h-40 bg-[#B8FF01] p-6 shadow-md rounded-lg">
            <h2 className="absolute top-4 left-4 text-black font-bold text-base md:text-lg">Total Production Output</h2> 
            <div className="flex items-center h-full">
              <span className="text-black text-xl md:text-2xl">120 kWh</span>
            </div>
          </div> 
          <div className="relative h-40 bg-[#E5ECF6] p-6 shadow-md rounded-lg">
            <h2 className="absolute top-4 left-4 text-black font-bold text-base md:text-lg">Defects Logged</h2> 
            <div className="flex items-center h-full">
              <span className="text-black text-xl md:text-2xl">120 kWh</span>
            </div>
          </div> 
          <div className="relative h-40 bg-[#B8FF01] opacity-50 p-6 shadow-md rounded-lg">
            <h2 className="absolute top-4 left-4 text-black font-bold text-base md:text-lg">Energy Consumption</h2> 
            <div className="flex items-center h-full">
              <span className="text-black text-xl md:text-2xl">120 kWh</span>
            </div>
          </div>  
        </div>

        {/* Second Row: 1 Large Card */}
        <div className="relative h-20 bg-[#E7FFA8] p-6 py-14 mb-4 shadow-md rounded-2xl">
          <h2 className="absolute top-4 left-4 text-black font-bold text-base md:text-lg">Active Machines</h2> 
          <div className="flex items-center pt-4 justify-end h-full">
            <span className="text-black text-lg md:text-xl">120 kWh</span>
          </div>
        </div> 

        {/* Third Row: 3 Cards */}
        <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
          <div className="relative h-20 bg-[#D3EFFF] py-4 px-4 shadow-md rounded-2xl">
            <h2 className="absolute top-4 left-4 text-black font-bold text-base md:text-lg">Real Time Monitoring</h2> 
            <div className="flex items-center pt-4 justify-end h-full">
              <span className="text-black text-lg md:text-xl">120 kWh</span>
            </div>
          </div>  
          <div className="relative h-20 bg-[#D3EFFF] py-4 px-4 shadow-md rounded-2xl">
            <h2 className="absolute top-4 left-4 text-black font-bold text-base md:text-lg">Production Tracking</h2> 
            <div className="flex items-center pt-4 justify-end h-full">
              <span className="text-black text-lg md:text-xl">120 kWh</span>
            </div>
          </div> 
          <div className="relative h-20 bg-[#D3EFFF] py-4 px-4 shadow-md rounded-2xl">
            <h2 className="absolute top-4 left-4 text-black font-bold text-base md:text-lg">Energy Tracking</h2> 
            <div className="flex items-center pt-4 justify-end h-full">
              <span className="text-black text-lg md:text-xl">120 kWh</span>
            </div>
          </div> 
        </div>

        {/* Fourth Row: Horizontal Bars and Bar Charts */}
        <div className="grid grid-cols-1 gap-4 mb-10 pb-6 md:grid-cols-2">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-bold mb-4">Alert Management</h3>
            <LevelsChart /> {/* Integrate LevelsChart here */}
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-lg font-bold mb-4">Energy Tracking</h3>
            <BarChartComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
