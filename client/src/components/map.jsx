import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const Map = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/dashboard");
  }

  /*
  function handleCamera() {
    navigate("/selectCamPage");
  }
  */

  return (
    <div>
      <Button
        className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded mr-5"
        onClick={handleBack}
      >
        Back
      </Button>
      <div>
        <img src=""/>
      </div>
    </div>
  );
};

export default Map;
