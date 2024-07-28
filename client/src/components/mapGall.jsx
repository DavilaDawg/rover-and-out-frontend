import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { getMapImgs } from "@/services/galleryService";
import { useState, useEffect } from "react";

const MapGall = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]); // arr of urls
  const [totalPhotos, setTotalPhotos] = useState(0);

  const { selectedLocation } = useParams();

  let longLocation = "";
  if (selectedLocation === "LAND") {
    // call server to fetch here based on location!!!
    longLocation = "Bradbury Landing";
  } else if (selectedLocation === "DRILL") {
    longLocation = "Mary Anning & Grocken Drill Sites";
  } else if (selectedLocation === "CURRENT") {
    longLocation = "Current Location";
  } else if (selectedLocation === "BEACH") {
    longLocation = "Ogunquit Beach";
  }

  // Navigation
  const navigate = useNavigate();

  function handleBack() {
    navigate("/map");
  }

  async function get() {
    setLoading(true);
    try {
      const result = await getMapImgs(selectedLocation); // Res is a arr of objs with img_src key

      if (result.success) {
        console.log("API result:", result);

        const urls = result.allPhotos.map((img) => img.img_src);
        setImages(urls);
        setTotalPhotos(urls.length);
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
  }, []);

  return (
    <>
      <div className="relative mb-4">
        <p className="text-5xl font-semibold pt-2 pl-2">{longLocation}</p>
        <Button
          className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded"
          onClick={handleBack}
        >
          Back
        </Button>
      </div>

      {selectedLocation === "DRILL" && (
        <img className="w-full max-w-4xl h-auto mx-auto mb-10" src="/drill.png" />
      )}

      <div>
        {loading && <p className="text-center mt-2">Loading images...</p>}
        {error && <p className="text-center text-red-400 mt-2">{error}</p>}

        {!loading && !error && (
          <>
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
    </>
  );
};

export default MapGall;
