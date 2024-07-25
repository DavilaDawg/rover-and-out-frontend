import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const Timeline = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/dashboard");
  }

  function handleGallery() {
    navigate("/dayGallery");
  }

  return (
    <div>
      <h1>TimeLine</h1>
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleGallery}>DayGallery</Button>
    </div>
  );
};

export default Timeline;