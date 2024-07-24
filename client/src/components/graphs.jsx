import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const Graphs = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Graphs</h1>
      <Button onClick={handleBack}>Back</Button>
    </div>
  );
};

export default Graphs;