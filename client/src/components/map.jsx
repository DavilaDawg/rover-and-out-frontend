import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import RoverButton from "@/components/ui/roverButton.jsx";

const Map = () => {
  // Navigation:
  const navigate = useNavigate();

  function handleBack() {
    navigate("/dashboard");
  }

  // Passing params as state for mapGall
  function toLanding() {
    navigate("/mapGall/LAND");
  }

  function toDrill() {
    navigate("/mapGall/DRILL");
  }

  function toBeach() {
    navigate("/mapGall/BEACH");
  }

  function toCurrent() {
    navigate("/mapGall/CURRENT");
  }

  return (
    <div className="relative mb-10">
      <p className="text-5xl font-semibold pt-2 pl-2">Select location</p>

      <div className="relative pt-4">
        <img className="w-full h-auto" src="/roverPath.png" alt="Rover path" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <RoverButton onClick={toBeach}></RoverButton>

          <Button
            className="absolute top-40 ml-56 bg-gray-800 text-white px-4 py-2 rounded"
            onClick={toLanding}
          >
            Bradbury Landing
          </Button>

          <Button
            className="absolute top-[53%] transform -translate-x-1/2 mt-80 ml-8 bg-gray-800 text-white px-4 py-2 rounded"
            onClick={toDrill}
          >
            Mary Anning & Grocken Drill Sites
          </Button>

          <Button
            className="absolute top-2/3 left-1/4 bg-gray-800 text-white px-4 py-2 rounded"
            onClick={toBeach}
          >
            Ogunquit Beach
          </Button>

          <Button
            className="absolute bottom-8 ml-10 bg-gray-800 text-white px-4 py-2 rounded"
            onClick={toCurrent}
          >
            Current Location
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Map;
