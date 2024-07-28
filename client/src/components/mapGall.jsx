import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const MapGall = () => {
  const { selectedLocation } = useParams();

  let longLocation = "";
  if (selectedLocation === "LAND") { // call server to fetch here based on location!!!
    longLocation = "Bradbury Landing";
  } else if (selectedLocation === "DRILL") {
    longLocation = "Mary Anning & Grocken Drill Sites";
  } else if (selectedLocation === "CURRENT") {
    longLocation = "Current Location";
  } else if (selectedLocation === "BEACH") {
    longLocation = "Ogunquit Beach";
  }

  // Navigation
  const navigate = useNavigate();

  function handleBack() {
    navigate("/map");
  }

  return (
    <div className="relative">
      <p className="text-5xl font-semibold pt-2 pl-2">{longLocation}</p>
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
