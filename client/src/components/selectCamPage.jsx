import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ModelViewer } from "./modelViewer"

const SelectCamPage = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/timeline");
  }

  return (
    <div>
      <h1 className="md:text-6xl">Select a camera</h1>

      <p>Actions:</p>
      <p>Rotate: Left-click and drag.</p>
      <p>Zoom: Scroll the mouse wheel.</p>
      <p>Pan: Right-click and drag or Shift + Left-click and drag.</p>
      <p>Reset View: Double-click the left mouse button.</p>

      <Button onClick={handleBack}>Back</Button>
      <ModelViewer></ModelViewer>
    </div>
  );
};

export default SelectCamPage;
