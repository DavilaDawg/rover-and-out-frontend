import React from "react";
import { useNavigate } from "react-router-dom";

// Ui components:
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button.jsx";

const Dashboard = () => {

  // Navigation:
  const navigate = useNavigate();

  function handleLogOut() {
    navigate("/");
  }

  function handleTimeline() {
    navigate("/timeline");
  }

  function handleGraphs() {
    navigate("/graphs");
  }

  function handleGallery() {
    navigate("/gallery");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <ModeToggle></ModeToggle>
      <Button onClick={handleLogOut}>Log out</Button>
      <Button onClick={handleTimeline}>TimeLine</Button>
      <Button onClick={handleGraphs}>Super cool graphs</Button>
      <Button onClick={handleGallery}>Gallery</Button>
    </div>
  );
};

export default Dashboard;
