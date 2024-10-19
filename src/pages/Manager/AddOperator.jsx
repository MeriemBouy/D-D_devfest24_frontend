import React from 'react';
import mapImg from '../../assets/Mapimage.png';
import logo from '../../assets/logo/FlowTrack..svg';

const AddOperator = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center min-h-screen p-6 relative">
      {/* Form Section */}
      <div className="p-8 w-full max-w-[100vh]">
        <h2 className="text-start text-xl font-semibold mb-6">Add a new Operator</h2>

        <form className="space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-semibold mb-2 bg-[#B8FF01] px-2 inline-block rounded">
              Username
            </label>
            <input
              type="text"
              className="w-full p-3 border-2 border-[#B8FF01] rounded-xl focus:outline-none focus:border-green-500"
            />
          </div>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 bg-[#B8FF01] px-2 inline-block rounded">
                First Name
              </label>
              <input
                type="text"
                className="w-full p-3 border-2 border-[#B8FF01] rounded-xl focus:outline-none focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 bg-[#B8FF01] px-2 inline-block rounded">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-3 border-2 border-[#B8FF01] rounded-xl focus:outline-none focus:border-green-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold mb-2 bg-[#B8FF01] px-2 inline-block rounded">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border-2 border-[#B8FF01] rounded-xl focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold mb-2 bg-[#B8FF01] px-2 inline-block rounded">
              Phone
            </label>
            <input
              type="tel"
              className="w-full p-3 border-2 border-[#B8FF01] rounded-xl focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#B8FF01] text-black p-3 rounded-2xl hover:bg-green-600 transition"
          >
            Add Operator
          </button>
        </form>
      </div>

      {/* Bottom left image */}
      <img
        src={mapImg}
        alt="Map"
        className="absolute bottom-4 left-4 w-[60vh] h-auto"
      />

      {/* Bottom right image */}
      <img
        src={logo} 
        alt="Logo's illustration"
        className="absolute bottom-20 right-20 w-[20vh] h-auto" 
      />
    </div>
  );
};

export default AddOperator;
