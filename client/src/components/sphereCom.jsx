import React from "react";
import { Sphere } from "@react-three/drei";


const SphereComponent = ({
  radius,
  position,
  handlePointerOut,
  handlePointerOver,
  handleClick
}) => {
  return (
    <mesh position={position} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} onClick={handleClick}>
      <Sphere args={[radius, 32, 32]}>
        <meshStandardMaterial
          attach="material"
          color="orange"
          transparent={true}
          opacity={0.6} // 0 is fully transparent, 1 is fully opaque
        />
      </Sphere>
    </mesh>
  );
};

export default SphereComponent;
