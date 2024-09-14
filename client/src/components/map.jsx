import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import RoverButton from "@/components/ui/roverButton.jsx";

const mapComponent = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate("/dashboard");
  const toLanding = () => navigate("/mapGall/LAND"); // Passing params as state for mapGall
  const toDrill = () => navigate("/mapGall/DRILL");
  const toBeach = () => navigate("/mapGall/BEACH");
  const toCurrent = () => navigate("/mapGall/CURRENT");

  return (
    <div className="relative mb-10">
      <p className="text-5xl font-semibold pt-2 pl-2">Select location</p>

      <Button
        onClick={handleBack}
        className="absolute top-4 right-5 bg-gray-600 text-gray-300 rounded hover:bg-gray-600 transition-colors"
      >
        Back
      </Button>

      <div className="relative pt-4">
        <img className="w-full h-auto" src="/roverPath.png" alt="Rover path" />

        <div className="absolute inset-0">
          <div className="absolute top-[8%] left-[53.5%] transform -translate-x-1/2 flex items-center space-x-4">
            <p className="text-xl font-semibold font-mono text-white">
              Bradbury Landing
            </p>
            <RoverButton onClick={toLanding} />
          </div>

          <div className="absolute top-[71.5%] left-[50.5%] transform -translate-x-1/2 flex items-center space-x-4">
            <RoverButton onClick={toDrill} />
            <p className="text-xl font-semibold font-mono text-white mb-10">
              Mary Anning & Grocken Drill Sites
            </p>
          </div>

          <div className="absolute top-[66%] left-[35.1%] transform -translate-x-1/2 flex items-center space-x-4">
            <RoverButton onClick={toBeach} />
            <p className="text-xl font-semibold font-mono text-white mb-10">
              Ogunquit Beach
            </p>
          </div>

          <div className="absolute top-[97%] left-[50.8%] transform -translate-x-1/2 flex items-center space-x-4">
            <RoverButton onClick={toCurrent} />
            <p className="text-xl font-semibold font-mono text-white">
              Current Location
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default mapComponent;
