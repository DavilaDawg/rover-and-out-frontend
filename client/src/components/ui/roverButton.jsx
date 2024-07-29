import React from 'react';

const RoverButton = () => { //{ onClick }
  return (
    <button
      // onClick={onClick}
      className="flex items-center justify-center w-14 h-14 bg-white shadow-md hover:bg-gray-700 focus:outline-none transition duration-500 ease-in-out"
    >
      <img
        src="/icon4.jpg" 
        alt="Rover Icon"
        className="w-10 h-10 object-cover"
      />
    </button>
  );
};

export default RoverButton;
