import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { getNasaInfo } from "../services/galleryService";
import { postFavService } from "../services/galleryService";


const BoringGallery = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sol, setSol] = useState(1);
  const [submittedSol, setSubmittedSol] = useState(null);
  const [images, setImages] = useState([]); // arr of urls
  const [totalPhotos, setTotalPhotos] = useState(0);

  //Navigation:
  function handleBack() {
    navigate("/gallDash");
  }

  function navigateAnnotated() {
    navigate("/annotated");
  }

  const handleInspect = (image) => {
    navigate("/imageViewer", {
      state: { imageUrl: image, isBoring: true, sol: sol },
    });
  };

  async function get() {
    setLoading(true);

    try {
      //const info = await getManifestInfo(sol);
      const result = await getNasaInfo(sol);

      if (result.success) {
        const urls = result.data.photos.map((img) => img.img_src);
        setImages(urls);
        setTotalPhotos(result.data.photos.length);
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
    <div className="w-full min-h-screen p-4">
      <h1 className="text-xl font-bold text-center mb-4">Gallery</h1>

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
          className="w-24 px-2 py-1 border rounded bg-gray-600 text-white"
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ml-2"
        >
          Submit
        </button>
      </div>

      <Button
        onClick={handleBack}
        className="absolute top-4 right-4 bg-gray-600 text-gray-300 rounded hover:bg-gray-600 transition-colors"
      >
        Back
      </Button>

      <div className="flex justify-center mt-4 space-x-2">
        <Button
          onClick={navigateAnnotated}
          className="bg-gray-600 text-gray-300 py-1 px-14 rounded hover:bg-gray-600 transition-colors"
        >
          View annotated
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
                <div key={index} className="relative group">
                  <button
                    className="rounded overflow-hidden"
                    onClick={() => handleInspect(image)}
                  >
                    <img
                      src={image}
                      alt={`Mars Rover Image ${index}`}
                      className="w-60 h-48 object-cover"
                    />
                  </button>
                  <button
                    className="absolute bottom-2 right-2 bg-white text-gray-700 text-xs font-black rounded-sm px-2 py-2 border border-gray-300 shadow-sm hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => postFavService(image, sol)}
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

export default BoringGallery;
