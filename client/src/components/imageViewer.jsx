import React from 'react';
import { useNavigate } from "react-router-dom";

const ImageViewer = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/gallery");
  }

  return (
    <div>
      <h1>ImageViewer works</h1>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ImageViewer;