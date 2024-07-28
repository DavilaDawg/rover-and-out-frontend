import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const Map = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/dashboard");
  }

  function toLanding() {
    navigate("/mapGall");
  }

  function toDrill() {
    navigate("/mapGall");
  }

  return (
    <div className="relative">
      <p className="text-5xl font-semibold pt-2 pl-2">Select location</p>
      <Button
        className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded"
        onClick={handleBack}
      >
        Back
      </Button>

      <div className="relative pt-4">
        <img className="w-full h-auto" src="/roverPath.png" alt="Rover path" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Button
            className="absolute top-40 ml-56 bg-gray-800 text-white px-4 py-2 rounded"
            onClick={toLanding}
          >
            Bradbury Landing
          </Button>

          <Button
            className="absolute top-2/3 mt-20 mr-14 bg-gray-800 text-white px-4 py-2 rounded"
            onClick={toDrill}
          >
            Mary Anning & Grocken Drill Sites
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Map;
