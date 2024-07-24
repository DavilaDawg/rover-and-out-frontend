import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.jsx";

const Gallery = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [imgSelected, setImgSelected] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  // Routing functions:
  function handleBack() {
    navigate("/dashboard");
  }

  function navigateAnnotated() {
    navigate("/annotated");
  }

  function navigateImgViewer() {
    navigate("/imageViewer");
  }

  // Fetching all images:
  const serverRoot = "http://localhost:3000";

  async function getImages() {
    const response = await fetch(serverRoot+ "/api/images", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const imagesUpdated = await response.json();
    setImages(imagesUpdated);
  }

  useEffect(() => {
    getImages();
    console.log(images)
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <button className="imgButton" onClick={navigateImgViewer}>
        <img src="/testimg1.jpg" alt="Test Image" />
      </button>
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={navigateAnnotated}>View all annotated</Button>
    </div>
  );
};

export default Gallery;
