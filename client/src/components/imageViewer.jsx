import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // UseLocation hook allows you to access the state object that you passed when navigating
import { Button } from "@/components/ui/button.jsx";
import * as markerjs2 from "markerjs2";
import { postAnnotations } from "@/services/galleryService";
import { postFavService } from "@/services/galleryService";

const ImageViewer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const imgRef = useRef(null); // Ref to hold the image element

  const { imageUrl, isBoring, sol, filter } = location.state || {};
  const [maState, setMaState] = useState(null);
  const [message, setMessage] = useState(false);

  // Navigation:
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

  // Annotation:
  useEffect(() => {
    if (imgRef.current) {
      const sourceImage = imgRef.current;
      const targetRoot = sourceImage.parentElement;

      const markerArea = new markerjs2.MarkerArea(sourceImage);
      markerArea.targetRoot = targetRoot;

      const handleRender = (event) => {
        sourceImage.src = event.dataUrl; // Update the image display
        setMaState(event.state); // Save the state of MarkerArea
      };

      markerArea.addEventListener("render", handleRender);
      markerArea.show();

      if (maState) {
        markerArea.restoreState(annotations);
      }

      // Cleanup on unmount
      return () => {
        markerArea.removeEventListener("render", handleRender);
      };
    }
  }, [imageUrl, maState]);

  function handleSave() {
    console.log("saving");
    if (imgRef.current) {
      const markerArea = new markerjs2.MarkerArea(imgRef.current);
      markerArea.getState().then((state) => {
        postAnnotations(imageUrl, state);
      });
    }
  }

  return (
    <>
      <div className="pb-1 mt-1">
        <Button
          onClick={handleBack}
          className="absolute top-4 right-[0%] bg-gray-800 text-white px-4 py-2 mr-5"
        >
          Back
        </Button>

        <Button
          onClick={navigateDash}
          className="absolute top-4 right-[3%] bg-gray-800 text-white px-4 py-2 mr-5"
        >
          Dashboard
        </Button>

        <Button
          className="absolute top-4 right-[49.2%] bg-gray-800 text-white px-4 py-2 mr-5"
          onClick={() => {
            setMessage(true);
            postFavService(imageUrl);
            setTimeout(() => {
              setMessage(false);
            }, 2000);
          }}
        >
          Add Favorite
        </Button>

        <Button
          onClick={handleSave}
          className="absolute top-4 right-[43.5%] bg-gray-800 text-white px-4 py-2"
        >
          Save Annotations
        </Button>

        {message && <p className="absolute mt-[2.55%] ml-[48%]">Added to Favorites</p>}

        {filter ? (
          <h1 className="text-6xl mb-10 ml-2 pb-8">
            Sol: {sol} Camera: {filter}
          </h1>
        ) : (
          <h1 className="text-6xl mb-10 ml-2 pb-8"> Sol: {sol} </h1>
        )}
      </div>

      <img
        ref={imgRef}
        src={imageUrl}
        alt="Selected Mars Rover"
        className="w-full h-full"
      />
    </>
  );
};

export default ImageViewer;
