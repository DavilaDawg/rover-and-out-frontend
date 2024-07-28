import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const MapGall = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/map");
  }

  return (
    <div className="relative">
      <p className="text-5xl font-semibold pt-2 pl-2">Location gallery</p>
      <Button
        className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded"
        onClick={handleBack}
      >
        Back
      </Button>
    </div>
  );
};

export default MapGall;
