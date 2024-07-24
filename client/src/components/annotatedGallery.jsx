import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";


const AnnotatedGallery = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/gallery");
  }

  return (
    <div>
      <h1>Annotated Gallery</h1>
      <Button onClick={handleBack}>Back</Button>
    </div>
  );
};

export default AnnotatedGallery;