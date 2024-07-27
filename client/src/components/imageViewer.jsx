import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // UseLocation hook allows you to access the state object that you passed when navigating
import { Button } from "@/components/ui/button.jsx";
import * as markerjs2 from "markerjs2";

const ImageViewer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const imgRef = useRef(null); // Ref to hold the image element

  const { imageUrl, isBoring, sol, filter } = location.state || {};
  const [annotatedImageUrl, setAnnotatedImageUrl] = useState(null);

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

  // Annotation:
  useEffect(() => {
    if (imgRef.current) {
      const markerArea = new markerjs2.MarkerArea(imgRef.current);
      markerArea.addEventListener("render", (event) => {
        imgRef.current.src = event.dataUrl; // Updates the display of the annotated image directly in the img element
      });
      markerArea.show();
    }
  }, [imageUrl]);

  function handleSave() {
    setAnnotatedImageUrl(imgRef.current.src)
    console.log(annotatedImageUrl)
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

        {filter ? (
          <h1 className="text-6xl mb-3">
            Sol: {sol} Camera: {filter}
          </h1>
        ) : (
          <h1 className="text-6xl ml-2"> Sol: {sol} </h1>
        )}

          <Button
            onClick={handleSave}
            className="absolute top-4 right-28 bg-gray-800 text-white px-4 py-2 rounded"
          >
            Save Image
          </Button>

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
