import React from "react";

const RoverButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-12 h-12 bg-white shadow-md hover:bg-gray-700 focus:outline-none transition duration-500 ease-in-out"
    >
      <img
        src="/mapIcon.jpg"
        alt="Rover Icon"
        className="w-9 h-9 object-cover"
      />
    </button>
  );
};

export default RoverButton;
