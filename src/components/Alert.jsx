import React from 'react';

const AlertComponent = ({ message, onClose }) => {
  return (
    <div className="flex items-center justify-between bg-orange-100 border-l-4 border-orange-500 p-4 rounded-lg max-w-xl">
      <div className="flex items-center">
        <div className="text-orange-500 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M12 7v2m0 4h.01M21 13a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="text-sm">
          <strong className="block font-medium">High Energy Consumption Alert</strong>
          <p>{message}</p>
        </div>
      </div>
      <button
        onClick={onClose}
        className="text-orange-500 hover:text-orange-700 focus:outline-none"
      >
        ✖️
      </button>
    </div>
  );
};

export default AlertComponent;
