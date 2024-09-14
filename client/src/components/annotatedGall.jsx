import React, { useState, useEffect, useRef } from "react";

const AnnotatedGallery = () => {
  const navigate = useNavigate();

  // Navigation:
  function handleBack() {
    navigate("/gallDash");
  }

  return (
    <>
      <p>This page is in progress</p>
    </>
  );
};

export default AnnotatedGallery;
