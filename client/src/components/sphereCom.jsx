import React from "react";
import { Sphere } from "@react-three/drei";


const SphereComponent = ({
  radius,
  position,
  handlePointerOut,
  handlePointerOver,
  handleClick,
  hovered
}) => {
  return (
    <mesh position={position} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} onClick={handleClick}>
      <Sphere args={[radius, 32, 32]}>
        <meshStandardMaterial
          attach="material"
          color={hovered ? "aqua" : "orange"}
          transparent={true}
          opacity={0.4} 
        />
      </Sphere>
    </mesh>
  );
};

export default SphereComponent;
