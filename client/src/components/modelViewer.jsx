import React, { Suspense } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Rover2 } from "./Rover2.jsx";

export const ModelViewer = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ fov: 70, position: [0, 0, 5] }}>
        {/* Ambient Light for overall illumination */}
        <ambientLight intensity={1} /> {/* Increase intensity for more light */}
        
        {/* Directional Light to simulate sunlight */}
        <directionalLight 
          position={[10, 10, 10]} 
          intensity={2} // Increased intensity for brighter light
          castShadow 
          shadow-mapSize-width={2048} // Increase shadow map size for better shadows
          shadow-mapSize-height={2048} 
        />
        
        {/* Point Light for additional illumination */}
        <pointLight 
          position={[-10, -10, 10]} 
          intensity={1} // Increased intensity for more light
          decay={2} // Makes light falloff more gradual
        />
        
        {/* Spotlight for focused lighting */}
        <spotLight 
          position={[0, 10, 10]} 
          angle={0.4} // Increased angle for a wider cone of light
          penumbra={1} 
          intensity={2} // Increased intensity for more light
          castShadow 
        />
        
        {/* Additional Point Light at the back for enhanced illumination */}
        <pointLight 
          position={[0, 0, -10]} // Positioned behind the model
          intensity={1.5} // Increased intensity for more light
          decay={2} // Makes light falloff more gradual
        />

        <Suspense fallback={<div>Loading model...</div>}>
          <Rover2 scale={1.5} />
        </Suspense>
        
        <OrbitControls />
      </Canvas>
    </div>
  );
};
