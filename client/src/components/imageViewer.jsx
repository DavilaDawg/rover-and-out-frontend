import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // UseLocation hook allows you to access the state object that you passed when navigating
import { Button } from "@/components/ui/button.jsx";

const ImageViewer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { imageUrl, isBoring , sol, filter} = location.state || {};

  if (!imageUrl) {
    //navigate( filter ? `/gallery/${filter}` : );
    const path = isBoring
      ? "/boringGallery"
      : `/gallery/${filter}`;
    navigate(path);
    return null;
  }

  // Handle back navigation
  function handleBack() {
    const path = isBoring
      ? "/boringGallery"
      : `/gallery/${filter}`;
    navigate(path)
  }

  //<p>Day: {sol}</p>
  //<p>Camera: {camera} </p>

  return (
    <div className="relative w-screen h-screen bg-gray-900">
      <Button
        onClick={handleBack}
        className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded mr-5"
      >
        Back
      </Button>
      <h1 className= "text-6xl mb-3"> Day: {sol} </h1>
      <img
        src={imageUrl}
        alt="Selected Mars Rover"
        className="w-full h-full"
      />
    </div>
  );
};

export default ImageViewer;
