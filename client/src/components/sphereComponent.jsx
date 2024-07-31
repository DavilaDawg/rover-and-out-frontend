// SphereComponent.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const SphereComponent = () => { // pass props 
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="blue" />
      </Sphere>
    </Canvas>
  );
};

export default SphereComponent;
