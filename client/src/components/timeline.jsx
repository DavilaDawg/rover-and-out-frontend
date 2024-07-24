import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const Timeline = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>TimeLine works</h1>
      <Button onClick={handleBack}>Back</Button>
    </div>
  );
};

export default Timeline;