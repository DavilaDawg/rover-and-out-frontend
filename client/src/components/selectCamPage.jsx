import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ModelViewer } from "./modelViewer";

const SelectCamPage = () => {
  // Navigation:
  const navigate = useNavigate();

  function handleBack() {
    navigate("/gallDash");
  }

  return (
    <div className="relative flex flex-row ml-[1%]">

      <div>
        <h1 className="md:text-6xl ml-5 mt-3">Select camera</h1>
        <Button
          className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded mr-5 z-10"
          onClick={handleBack}
        >
          Back
        </Button>
        <img className="w-[200%] h-[35%] ml-[3%] mt-[4%]" src="/cameraa2.jpg" />
      </div>
      <ModelViewer></ModelViewer>
    </div>
  );
};

export default SelectCamPage;
