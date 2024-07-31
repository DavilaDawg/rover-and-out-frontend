// SphereComponent.js
import React from "react";
import { Sphere } from "@react-three/drei";

const SphereComponent = () => { // pass props
  return (
    <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial attach="material" color="blue" />
    </Sphere>
  );
};

export default SphereComponent;
