import React from 'react';
import { useNavigate } from "react-router-dom";

const Graphs = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Graphs works</h1>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Graphs;