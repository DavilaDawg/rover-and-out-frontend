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
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow">
        <ModeToggle />
        <div className="flex flex-col gap-10 mt-8">
          <Button
            onClick={handleTimeline}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg"
          >
            Timeline
          </Button>
          <Button
            onClick={handleGraphs}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg"
          >
            Super Cool Graphs
          </Button>
          <Button
            onClick={handleGallery}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg"
          >
            Gallery
          </Button>
          <Button
            onClick={handleLogOut}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg"
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
