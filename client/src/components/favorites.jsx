import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getFavsService } from "@/services/galleryService";
import { deleteFavService } from "@/services/galleryService";
import { Button } from "./ui/button";

const Favorites = () => {
  const [images, setImages] = useState([]); // Arr of urls
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalFavs, setTotalFavs] = useState(0);
  const [deleting, setDeleting] = useState(false);

  //Navigation:
  const navigate = useNavigate();

  function handleBack() {
    navigate("/gallDash");
  }

  // Fetch images:
  async function getFavs() {
    setLoading(true);

    try {
      const result = await getFavsService();

      if (result.success) {
        console.log("Favs result:", result.data);

        const urls = result.data.map((img) => img.url);
        setImages(urls);
        setTotalFavs(urls.length);
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
    getFavs();
    setDeleting(false)
  }, [deleting]);

  /*navigate("/imageViewer", {
                        state: {
                          imageUrl: image,
                          isBoring: false,
                          sol: sol,
                          filter: camToFilter,
                        },
                      })
                        */
  return (
    <>
      <Button
        onClick={handleBack}
        className="absolute top-4 right-5 bg-gray-600 text-gray-300 rounded hover:bg-gray-600 transition-colors"
      >
        Back
      </Button>

      {loading && <p className="text-center text-2xl mt-[0.8%] animate-fade-in-out">Loading images...</p>}

      {error && <p className="text-center text-red-400 text-2xl mt-[0.8%]">{error}</p>}

      {!loading && !error && (
        <>
          <p className="text-center text-2xl mt-[0.8%]">Total Favorites: {totalFavs}</p>

          <div className="flex flex-wrap justify-center gap-4 mt-[0.9%]">
            {images.length > 0 ? (
              images.map((image, index) => (
                <div key={index} className="relative flex flex-col group">
                  <button
                    className="border border-gray-600 rounded overflow-hidden"
                    onClick={() => console.log("navigate to imageViewer")}
                  >
                    <img
                      src={image}
                      alt={`Mars Rover Image ${index}`}
                      className="w-60 h-48 object-cover"
                    />
                  </button>
                  <button
                    className="absolute bottom-2 right-2 bg-white text-gray-700 text-xs font-black rounded-sm px-2 py-1 border border-gray-300 shadow-sm hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => {
                      deleteFavService(image);
                      setDeleting(true)
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Favorites;
