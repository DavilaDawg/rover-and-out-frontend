import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Rover2 } from "./Rover2.jsx";

export const ModelViewer = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Canvas camera={{ fov: 80, position: [0, 1, 5] }}>
        {/* Lighing: */}
        <ambientLight intensity={1} />
        <directionalLight position={[2, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, 10]} intensity={1} />
        <spotLight
          position={[0, 10, 10]}
          angle={0.4} // Increased angle for a wider cone of light
          penumbra={1}
          intensity={2}
        />
        <pointLight position={[0, 0, -10]} intensity={1.5} /> {/* Light at the back but not enough */}
        <Rover2 scale={1.5} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
