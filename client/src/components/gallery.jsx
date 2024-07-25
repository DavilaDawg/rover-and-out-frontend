import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";
import { getNasaInfo } from "../services/galleryService";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Gallery = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sol, setSol] = useState(0); // other galls will be set by user input from timeline
  const [images, setImages] = useState([]); // stores img urls
  //const [imgIsSelected, setImgIsSelected] = useState(false);
  //const [currentImg, setCurrentImg] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const imagesPerPage = 25; // API limit is 25 per page!!!

  // Navigation
  function handleBack() {
    navigate("/dashboard");
  }

  function navigateAnnotated() {
    navigate("/annotated");
  }

  function navigateImgViewer(url) {
    // Pass the image URL to the image viewer component via state or URL parameters
    navigate("/imageViewer", { state: { imageUrl: url } });
  }

  // fetch imgs from backend using galleryService
  async function getImages() {
    setLoading(true);

    try {
      const result = await getNasaInfo(sol, currentPage); // type: arr of objects
      console.log("API result:", result); // Add this to check the API response

      if (result.success) {
        setImages(result.data);
        setError(null);
        setTotalPages(Math.ceil(result.total_images / imagesPerPage)); // Set the total number of pages
        console.log(images)
      } else {
        setImages([]); // result: {success: false, error: 'Service Unavailable. Please try again later.'}
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

  //Page funcs:
  function handlePreviousPage() {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  function handlePageSelect(pageNumber) {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  }

  useEffect(() => {
    getImages();
  }, [sol, currentPage]);


  console.log(currentPage)
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

      {loading ? <p className="text-center">Loading images...</p> : <div></div>}

      <div className="flex justify-center mt-4 space-x-2">
        <Button
          onClick={handleBack}
          className="bg-blue-600 text-white py-1 px-3 rounded"
        >
          Back
        </Button>
        <Button
          onClick={navigateAnnotated}
          className="bg-green-600 text-white py-1 px-3 rounded mb-5"
        >
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
                  onClick={() => navigateImgViewer(image.img_src)} // somehow need to pass param of url, doing that already??
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
                No images available for this sol.
              </p>
            )}
          </div>

          {images.length > 20 && (
            <div className="flex justify-center mt-4 space-x-2">
              <Button
                onClick={handleBack}
                className="bg-blue-600 text-white py-1 px-3 rounded"
              >
                Back
              </Button>
              <Button
                onClick={navigateAnnotated}
                className="bg-green-600 text-white py-1 px-3 rounded"
              >
                View all annotated
              </Button>
            </div>
          )}

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious onClick={handlePreviousPage} />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageSelect(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {totalPages > 5 && <PaginationEllipsis />}
              <PaginationItem>
                <PaginationNext onClick={handleNextPage} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </div>
  );
};

export default Gallery;
