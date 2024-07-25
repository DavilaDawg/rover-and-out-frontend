import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { getNasaInfo } from "../services/galleryService";

const Gallery = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sol, setSol] = useState(0); // other galls will be set by user input from timeline 
  const [images, setImages] = useState([]); // stores img urls
  //const [imgIsSelected, setImgIsSelected] = useState(false);
  //const [currentImg, setCurrentImg] = useState(null);

  // Navigation
  function handleBack() {
    navigate("/dashboard");
  }

  function navigateAnnotated() {
    navigate("/annotated");
  }

  function navigateImgViewer() {
    navigate("/imageViewer");
  }

  // fetch imgs from backend using galleryService
  async function getImages() {
    setLoading(true);

    try {
      const result = await getNasaInfo(sol); // type: arr of objects

      if (result.success) {
        setImages(result.data);
        setError(null);
      } else {
        // result: {success: false, error: 'Service Unavailable. Please try again later.'}
        setImages([]);
        setError(result.error || "An unexpected error occurred in service.");
        console.log("result:", result);
      }
    } catch (error) {
      console.error("Unexpected error in client:", error);
      setImages([]);
      setError("An unexpected error occurred in client.");
    } finally {
      setLoading(false);
      console.log(images);
    }
  }

  useEffect(() => {
    getImages();
  }, [sol]);

  function navigateImgViewer(url) {
    // Pass the image URL to the image viewer component via state or URL parameters
    navigate("/imageViewer", { state: { imageUrl: url } });
  }

  return (
    <div className="w-full min-h-screen p-4 bg-gray-800 text-white">
      <h1 className="text-xl font-bold text-center mb-4">Gallery</h1>

      <div className="flex justify-center mb-4">
        <label htmlFor="sol" className="mr-2">
          Sol:
        </label>
        <input
          type="number"
          id="sol"
          value={sol}
          onChange={(e) => setSol(Number(e.target.value))} // Convert value to number
          min="0"
          className="w-24 px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white"
        />
      </div>

      {loading ? (
        <p className="text-center">Loading images...</p>
      ) : <div></div>}

      <div className="flex justify-center mt-4 space-x-2">
              <Button
                onClick={handleBack}
                className="bg-blue-600 text-white py-1 px-3 rounded">
                Back
              </Button>
              <Button
                onClick={navigateAnnotated}
                className="bg-green-600 text-white py-1 px-3 rounded mb-5">
                View all annotated
              </Button>
      </div>

      {loading ? (
        <div></div>
      ) : error ? (
        <p className="text-center text-red-400">{error}</p>
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-4">
            {images.length > 0 ? (
              images.map((image) => (
                <button
                  key={image.id} // Adding a unique key for each element
                  className="border border-gray-600 rounded overflow-hidden"
                  onClick={() => navigateImgViewer(image.img_src)}
                >
                  <img
                    src={image.img_src} 
                    alt={`Mars Rover Image ${image.id}`} 
                    className="w-60 h-48 object-cover" // Maintaing consistent image height
                  />
                </button>
              ))
            ) : (
              <p className="text-center col-span-full">
                No images available for Sol {sol}.
              </p>
            )}
          </div>

          {images.length > 20 && (
            <div className="flex justify-center mt-4 space-x-2">
              <Button
                onClick={handleBack}
                className="bg-blue-600 text-white py-1 px-3 rounded">
                Back
              </Button>
              <Button
                onClick={navigateAnnotated}
                className="bg-green-600 text-white py-1 px-3 rounded">
                View all annotated
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Gallery;