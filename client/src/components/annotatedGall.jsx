import React, { useState, useEffect, useRef } from "react";
import * as markerjs2 from "markerjs2";

const AnnotatedGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Retrieve annotations from local storage
    const savedData = localStorage.getItem("annotations");
    if (savedData) {
      setImages(JSON.parse(savedData));
    }
  }, []);

  const applyAnnotations = (img, state) => {
    try {
      const markerArea = new markerjs2.MarkerArea(img);
      markerArea.show();
      markerArea.restoreState(state); // Restore state for each image
      console.log("Annotations applied:", { img, state }); // Debugging line
    } catch (error) {
      console.error("Error applying annotations:", error); // Debugging line
    }
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {images.map((image, index) => (
        <div key={index} style={{ position: 'relative', width: '300px' }}>
          <img
            src={image.url}
            alt={`Annotated ${index}`}
            style={{ width: '100%', height: 'auto' }}
            ref={(el) => {
              if (el) {
                el.crossOrigin = "Anonymous";
                el.src = image.url + "?not-from-cache-please"
                // Ensure annotations are applied after image is fully loaded
                el.onload = () => applyAnnotations(el, image.state);
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default AnnotatedGallery;
