import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";


const ImageViewer = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/gallery");
  }

  return (
    <div>
      <h1>ImageViewer</h1>
      <Button onClick={handleBack}>Back</Button>
    </div>
  );
};

export default ImageViewer;