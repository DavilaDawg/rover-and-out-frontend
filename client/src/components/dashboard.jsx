import React from "react";
import { useNavigate } from "react-router-dom";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button.jsx";

const Dashboard = () => {

  const navigate = useNavigate();

  function handleLogOut() {
    navigate("/");
  }

  function handleMap() {
    navigate("/map");
  }

  function handleGraphs() {
    navigate("/graphs");
  }

  function handleGallery() {
    navigate("/gallDash");
  }

  function handleFavs() {
    navigate("/favorites");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow">
        <ModeToggle />
        <div className="flex flex-col gap-10 mt-8">
          <Button
            onClick={handleGallery}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg"
          >
            Gallery
          </Button>
          <Button
            onClick={handleMap}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg"
          >
            Interactive Map
          </Button>

          <Button
            onClick={handleGraphs}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg"
          >
            Super Cool Data
          </Button>
          <Button
            onClick={handleFavs}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg"
          >
            Favorites
          </Button>
          <Button
            onClick={handleLogOut}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg mt-16"
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
