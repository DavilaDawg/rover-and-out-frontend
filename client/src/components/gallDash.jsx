import React from "react";
import { Button } from "./ui/button";
import { useNavigate} from "react-router-dom";

const GallDash = () => {

  const navigate = useNavigate();

  function handleBoring() {
    navigate("/boringGallery");
  }

  function handleFilter() {
    navigate("/selectCamPage");
  }

  function handleBack() {
    navigate("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-col gap-10 mt-8">
          <h1 className="text-white text-5xl font-bold ml-6">
            Select filter:
          </h1>
          <Button
            onClick={handleBoring}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg"
          >
            Sol
          </Button>
          <Button
            onClick={handleFilter}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg"
          >
            Sol and camera
          </Button>
          <Button
            onClick={handleBack}
            className="text-4xl font-semibold px-12 py-6 w-80 h-25 rounded-lg"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GallDash;
