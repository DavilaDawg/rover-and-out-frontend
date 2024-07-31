import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ModelViewer } from "./modelViewer";

const SelectCamPage = () => {
  const navigate = useNavigate();
  
  function handleBack() {
    navigate("/gallDash");
  }

  return (
    <>
      <div>
        <h1 className="md:text-6xl ml-5 mt-3">Select camera</h1>
        <Button
          className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded mr-5 z-10"
          onClick={handleBack}
        >
          Back
        </Button>
      </div>
      <ModelViewer></ModelViewer>
    </>
  );
};

export default SelectCamPage;
