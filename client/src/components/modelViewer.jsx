import React, { useRef, useEffect, Suspense} from "react";
import {Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import { Rover } from "./Rover.jsx"

export const ModelViewer = () => {

  return (
    <>
      <div style={{ height: '100vh', width: '100vw' }} >
        <Canvas camera={{ fov:70, position: [0,0,5]}}> 
          <ambientLight/>
          <Suspense fallback={<div>Loading model...</div>}>
            <Rover scale= {1.5} />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
    
  );
}
