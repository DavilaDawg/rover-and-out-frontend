import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { ModelViewer } from "./modelViewer"

const DayGallery = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/timeline");
  }

  return (
    <div>
      <h1 className="md:text-6xl">DayGallery</h1>
      <Button onClick={handleBack}>Back</Button>
      <ModelViewer></ModelViewer>
    </div>
  );
};

export default DayGallery;
