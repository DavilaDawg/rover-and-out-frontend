import React from 'react';
import { useNavigate } from "react-router-dom";


const AnnotatedGallery = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/gallery");
  }

  return (
    <div>
      <h1>AnnotatedGallery works!</h1>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default AnnotatedGallery;