import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const Map = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/dashboard");
  }

  function toLanding() {
    navigate("/gallery"); // reuse??
  }

  return (
    <div className="relative">

      <p className= "text-5xl font-semibold pt-2 pl-2" >Select location</p>
      <Button
        className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded"
        onClick={handleBack}
      >
        Back
      </Button>

      <div className="relative pt-4"> 
        <img
          className="w-full h-auto"
          src="/roverPath.png"
          alt="Rover path"
        />
        <Button
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded"
          onClick={toLanding}
        >
          Bradbury Landing
        </Button>
      </div>
    </div>
  );
};

export default Map;
