import React from "react";
import { useNavigate } from "react-router-dom";
import ModeToggle from "./mode-toggle";

const Dashboard = () => {
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
      <h1>Dashboard works</h1>
      <ModeToggle></ModeToggle>
      <button onClick={handleLogOut}>Log out</button>
      <button onClick={handleTimeline}>TimeLine</button>
      <button onClick={handleGraphs}>Super cool graphs</button>
      <button onClick={handleGallery}>Gallery</button>
    </div>
  );
};

export default Dashboard;
