import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getFavsService } from "@/services/galleryService";
import { deleteFavService } from "@/services/galleryService";
import { Button } from "./ui/button";

const Favorites = () => {
  const [images, setImages] = useState([]); // Arr of urls
  const [sols, setSols] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleBack() {
    navigate("/gallDash");
  }

  async function getFavs() {
    try {
      const result = await getFavsService();

      if (result.success) {
        console.log("Favs result:", result.data);

        const urls = result.data.map((img) => img.url);
        const dayArr = result.data.map((img) => img.sol);

        setImages(urls);
        setSols(dayArr)
      } else {
        setError(result.error || "An unexpected error occurred in service.");
      }
    } catch (error) {
      console.error("Unexpected error in client:", error);
      setError("An unexpected error occurred in client.");
    }
  }

  useEffect(() => {
    getFavs();
  }, []);

  async function handleDelete(image) {
    await deleteFavService(image); // Updating db

    const index = images.indexOf(image); // Find the index of the image to delete
    
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedSols = sols.filter((_, i) => i !== index);

    setImages(updatedImages);
    setSols(updatedSols);
    console.log(sols)
  }

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

      {error && (
        <p className="text-center text-red-400 text-2xl mt-[0.8%]">{error}</p>
      )}

      <>
        <p className="text-center text-2xl mt-[0.8%]">
          Total Favorites: {images.length}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-[0.9%]">
          {images.length > 0 ? (
            images.map((image, index) => (
              <div key={index} className="relative flex flex-col group">
                <button
                  className="rounded overflow-hidden"
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
                  onClick={() => handleDelete(image)}
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
    </>
  );
};

export default Favorites;
