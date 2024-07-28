import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { getNasaInfo } from "../services/galleryService"; // after moving fetchImagesAndManifest to server wont need this here anymore
import { getManifestInfo } from "../services/galleryService";

const Gallery = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sol, setSol] = useState(0);
  const [submittedSol, setSubmittedSol] = useState(null);
  const [images, setImages] = useState([]); // arr of urls
  const [totalPhotos, setTotalPhotos] = useState(0);

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
  }

  //Navigation:
  function handleBack() {
    navigate("/selectCamPage");
  }

  function navigateAnnotated() {
    navigate("/annotated");
  }

  function navigateDash() {
    navigate("/dashboard");
  }

  async function get() {
    setLoading(true);

    try {
      //const info = await getManifestInfo(sol);
      const result = await getNasaInfo(sol);

      if (result.success) {
        console.log("API result:", result.data);

        const filteredPhotos = result.data.photos.filter((photo) =>
          photo.camera.name.includes(camToFilter)
        );

        const urls = filteredPhotos.map((img) => img.img_src);
        setImages(urls);
        setTotalPhotos(filteredPhotos.length);
        setError(null);
      } else {
        setImages([]);
        setError(result.error || "An unexpected error occurred in service.");
      }
    } catch (error) {
      console.error("Unexpected error in client:", error);
      setImages([]);
      setError("An unexpected error occurred in client.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    get();
  }, [submittedSol]);

  const handleSubmit = () => {
    // on submit the total pics should be shown!!!! FIXXXXXXXXXXXXXXXXXXXXXxxxx
    setSubmittedSol(sol);
  };

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
        className="absolute top-4 right-20 bg-gray-600 text-white px-4 py-2 rounded mr-5"
      >
        Dashboard
      </Button>

      <Button
        onClick={handleBack}
        className="absolute top-4 right-5 bg-gray-600 text-gray-300 rounded hover:bg-gray-600 transition-colors"
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
          value={sol}
          onChange={(e) => setSol(Number(e.target.value))}
          min="0"
          className="w-24 px-2 py-1 border border-gray-600 rounded bg-gray-700 text-white"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ml-2"
        >
          Submit
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        <Button
          onClick={navigateAnnotated}
          className="bg-gray-600 text-gray-300 py-1 px-14 rounded hover:bg-gray-600 transition-colors"
        >
          View all annotated
        </Button>
      </div>

      {loading && <p className="text-center mt-2">Loading images...</p>}

      {error && <p className="text-center text-red-400 mt-2">{error}</p>}

      {!loading && !error && (
        <>
          <p className="text-center mt-2 mb-2">
            Total Photos for Sol {sol}: {totalPhotos}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {images.length > 0 ? (
              images.map((image, index) => (
                <button
                  key={index}
                  className="border border-gray-600 rounded overflow-hidden"
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
