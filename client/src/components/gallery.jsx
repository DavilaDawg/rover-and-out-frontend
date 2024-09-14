import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { getNasaInfoByCam } from "../services/galleryService";
import { postFavService } from "../services/galleryService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BallTriangle } from "react-loader-spinner";

const Gallery = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sol, setSol] = useState(0);
  const [images, setImages] = useState([]); // Arr of urls
  const [totalPhotos, setTotalPhotos] = useState(0);
  const [inputValue, setInputValue] = useState(0); // Temporary to hold input value

  const { camToFilter } = useParams(); // Initalizing a param to set later

  // Camera details for conditional rendering:
  let cameraDetails = "";
  let camName = "";
  if (camToFilter === "MAHLI") {
    cameraDetails =
      "Microscopic Imaging of minerals, textures and structures in rocks and soil at scales smaller than the diameter of a human hair.";
    camName = "Mars Hand Lens Imager";
  } else if (camToFilter === "NAVCAM") {
    cameraDetails =
      "Captures high-resolution, wide-angle images to create 3D terrain maps, enabling autonomous navigation and obstacle avoidance for safe exploration.";
    camName = "Navigation Camera";
  } else if (camToFilter === "RHAZ") {
    cameraDetails =
      "Detects obstacles, ensuring safe navigation of the rover across the Martian surface.";
    camName = "Rover Hazard Avoidance Camera";
  } else if (camToFilter === "CHEMCAM") {
    cameraDetails =
      "Uses a laser to vaporize materials then later analyzes their elemental composition using an on-board spectrograph.";
    camName = "ChemCam";
  } else if (camToFilter === "MAST") {
    cameraDetails =
      "Captures high-resolution color images and videos to aid in analyzing the planet's surface and atmosphere.";
    camName = "Mast Camera";
  } else if (camToFilter === "MARDI") {
    cameraDetails =
      "Captures high-resolution images of Mars during the rover's descent.";
    camName = "Mars Descent Imager";
  }

  const handleBack = () => navigate("/selectCamPage");
  const navigateAnnotated = () => navigate("/annotated");
  const navigateDash = () => navigate("/dashboard");

  const handleSubmit = () => {
    setSol(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  useEffect(() => {
    const controller = new AbortController(); 
    const { signal } = controller;

    async function get() {
      setLoading(true);

      try {
        const result = await getNasaInfoByCam(sol, camToFilter); 
        if (result.success) {
          console.log("API result:", result.data.photos);

          const urls = result.data.photos.map((img) => img.img_src);
          setImages(urls);
          setTotalPhotos(urls.length);
          setError(null);
        } else {
          setImages([]);
          setError(result.error || "An unexpected error occurred in service.");
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Unexpected error in client:", error);
          setImages([]);
          setError("An unexpected error occurred in client.");
        }
      } finally {
        setLoading(false);
      }
    }

    get();

    // Cleanup function to abort the fetch on component unmount
    return () => {
      controller.abort();
    };
  }, [sol, camToFilter]); 

  return (
    <div className="w-full min-h-screen p-4 text-white">
      <h1 className="text-5xl font-bold">Gallery</h1>
      <div className="flex mt-3 justify-center">
        <p className=" mb-4 text-4xl font-semibold">Camera:</p>
        <p className="text-3xl mt-1 ml-3">{camName}</p>
      </div>
      <p className="flex justify-center text-lg rounded-md font-semibold mb-4">
        {cameraDetails}
      </p>

      <Button
        onClick={navigateDash}
        className="absolute top-4 right-20 bg-gray-600 text-white mr-5"
      >
        Dashboard
      </Button>

      <Button
        onClick={handleBack}
        className="absolute top-4 right-5 bg-gray-600 text-white "
      >
        Back
      </Button>

      <div className="flex justify-center mb-4">
        <label htmlFor="sol" className="mr-2 mt-2">
          Sol:
        </label>
        <input
          type="number"
          id="sol"
          value={inputValue}
          onChange={handleInputChange}
          min="0"
          className="w-24 px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white"
        />
        {!loading ? (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ml-2 "
          >
            Submit
          </button>
        ) : (
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded ml-2"
            disabled={true}
          >
            Submit
          </button>
        )}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {/*
        <Button
          onClick={navigateAnnotated}
          className="bg-gray-600 text-gray-300 py-1 px-14 rounded hover:bg-gray-600 transition-colors"
        >
          View all annotated
        </Button>
        */}
      </div>

      {loading && (
        <div className="ml-[48%] mt-[17%]">
          <BallTriangle></BallTriangle>
        </div>
      )}

      {error && <p className="text-center text-red-400 mt-2">{error}</p>}

      {!loading && !error && (
        <>
          <p className="text-center mt-2 mb-2">
            Total Photos for Sol {sol}: {totalPhotos}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {images.length > 0 ? (
              images.map((image, index) => (
                <div key={index} className="relative flex flex-col group">
                  <button
                    className="rounded overflow-hidden"
                    onClick={() =>
                      navigate("/imageViewer", {
                        state: {
                          imageUrl: image,
                          isBoring: false,
                          sol: sol,
                          filter: camToFilter,
                        },
                      })
                    }
                  >
                    <img
                      src={image}
                      alt={`Mars Rover Image ${index}`}
                      className="w-60 h-48 object-cover"
                    />
                  </button>
                  <button
                    className="absolute bottom-2 right-2 bg-white text-gray-700 text-xs font-black rounded-sm px-2 py-2 border border-gray-300 shadow-sm hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => {
                      postFavService(image, sol);
                      toast.info("Added to favorites", {
                        position: "top-right",
                        autoClose: 1000, // [ms]
                      });
                    }}
                  >
                    Add Favorite
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full">
                No images available for this sol.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Gallery;
