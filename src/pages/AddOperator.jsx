import React, { useState } from 'react';
// Import your assets (images)
import car from '../assets/addOperator/car.svg';
import FlowTrack from '../assets/addOperator/FlowTrack.svg';
import Mapimage from '../assets/addOperator/Mapimage.svg';

const AddOperator = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center relative">
      {/* Left Image (Map Image) */}
      <div className="absolute left-0 bottom-0 w-1/4">
        <img src={Mapimage} alt="Map" className="object-cover h-full w-full" />
      </div>

      {/* Form Card */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10 relative">
        {/* Car Icon at Top Right */}
        <div className="absolute top-2 right-2">
          <img src={car} alt="Car" className="w-8 h-8" />
        </div>

        <h2 className="text-xl font-semibold mb-6 text-center">Add a new operator</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Enter phone number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-500 text-white font-bold py-2 rounded hover:bg-lime-600"
          >
            Ajouter client
          </button>
        </form>

        {/* Logo at the bottom */}
        <div className="text-center mt-8">
          <img src={FlowTrack} alt="FlowTrack Logo" className="inline-block w-24 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default AddOperator;
