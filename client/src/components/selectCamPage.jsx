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

  // add button to display directions
  return (
    <div>
      <h1 className="md:text-6xl ml-5 mt-3">Select a camera</h1>

      <Button
        className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded mr-5"
        onClick={handleBack}
      >
        Back
      </Button>

      <div className="ml-5 mt-5">
        <p className= "md:text-2xl">Actions:</p>
        <p>Rotate: Left-click and drag.</p>
        <p>Zoom: Scroll the mouse wheel.</p>
        <p>Pan: Right-click and drag or Shift + Left-click and drag.</p>
        <p>Reset View: Double-click the left mouse button.</p>
      </div>
      <ModelViewer></ModelViewer>
    </div>
  );
};

export default SelectCamPage;
