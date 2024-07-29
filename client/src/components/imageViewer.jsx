import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // UseLocation hook allows you to access the state object that you passed when navigating
import { Button } from "@/components/ui/button.jsx";
import * as markerjs2 from "markerjs2";

const ImageViewer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const imgRef = useRef(null); // Ref to hold the image element

  const { imageUrl, isBoring, sol, filter } = location.state || {};
  const [maState, setMaState] = useState(null);

  if (!imageUrl) {
    const path = isBoring ? "/boringGallery" : `/gallery/${filter}`;
    navigate(path);
    return null;
  }

  function handleBack() {
    const path = isBoring ? "/boringGallery" : `/gallery/${filter}`;
    navigate(path, { state: { sol } });
  }

  function navigateDash() {
    navigate("/dashboard");
  }

  useEffect(() => {
    if (imgRef.current) {
      const sourceImage = imgRef.current;
      const targetRoot = sourceImage.parentElement;

      const markerArea = new markerjs2.MarkerArea(sourceImage);
      markerArea.targetRoot = targetRoot;

      const handleRender = (event) => {
        sourceImage.src = event.dataUrl; // Update the image display
        setMaState(event.state); // Save the state of MarkerArea

        const savedImages = JSON.parse(localStorage.getItem('annotations')) || []; 

        const updatedImages = savedImages.filter(img => img.url !== imageUrl);
        updatedImages.push({ url: imageUrl, state: event.state });
        localStorage.setItem('annotations', JSON.stringify(updatedImages));
      };

      markerArea.addEventListener("render", handleRender);
      markerArea.show();

      // Restore state if present
      const savedState = localStorage.getItem('annotations');

      if (savedState) { 
        console.log("saved state: ", savedState)
        const annotations = JSON.parse(savedState);
        const imageAnnotation = annotations.find(annotation => annotation.url === imageUrl);
        if (imageAnnotation) {
          markerArea.restoreState(imageAnnotation.state);
        }
      }

      // Cleanup on unmount
      return () => {
        markerArea.removeEventListener("render", handleRender);
      };
    }
  }, [imageUrl]); // When the component mounts or imageUrl changes, you check localStorage for previously saved annotations
  

  function handleSave() { 
    if (imgRef.current) {
      const markerArea = new markerjs2.MarkerArea(imgRef.current);

      try {
        const state = markerArea.getState();
        const savedImages = JSON.parse(localStorage.getItem('annotations')) || [];

        const updatedImages = savedImages.filter(img => img.url !== imageUrl);
        updatedImages.push({ url: imageUrl, state });
        localStorage.setItem('annotations', JSON.stringify(updatedImages));
        console.log("Annotations saved to local storage.");
      } catch (error) {
        console.error("Error getting state:", error);
      }
    }
  }

  return (
    <>
      <div className="mb-12 pb-1 bg-gray-900">
        <Button
          onClick={handleBack}
          className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded mr-5"
        >
          Back
        </Button>
        <Button
          onClick={navigateDash}
          className="absolute top-4 right-56 bg-gray-800 text-white px-4 py-2 rounded mr-5"
        >
          Dashboard
        </Button>

        {filter ? (
          <h1 className="text-6xl mb-3">
            Sol: {sol} Camera: {filter}
          </h1>
        ) : (
          <h1 className="text-6xl ml-2"> Sol: {sol} </h1>
        )}
      </div>

      <div className="bg-gray-900">
        <button
          onClick={handleSave}
          className="absolute top-4 right-28 bg-gray-800 text-white px-4 py-2 rounded"
        >
          Save Annotations
        </button>
      </div>

      <img
        ref={imgRef}
        src={imageUrl}
        alt="Selected Mars Rover"
        className = "w-full h-full"
      />
    </>
  );
};

export default ImageViewer;
