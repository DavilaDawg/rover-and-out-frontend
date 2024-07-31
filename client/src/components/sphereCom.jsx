import React from "react";
import { Sphere } from "@react-three/drei";

// Left nav cams: { radius = 0.08, position = [-1.8, 1.72, -0.3] }
// Right nav cams: { radius = 0.08, position = [-1.35, 1.72, -0.3] }
// MAHLI: { radius = 0.08, position = [-0.62, 1.66, 0.64] }
// Right rear: { radius = 0.09, position = [-0.56, 0.55, -2.1] }
// Left rear: { radius = 0.09, position = [-1.56, 0.55, -2.1] }

const SphereComponent = ({ radius = 0.08, position = [-1.47, 1.88, -0.28] }) => {
  return (
    <Sphere args={[radius, 32, 32]} position={position}>
      <meshStandardMaterial
        attach="material"
        color="gray"
        transparent={true}
        opacity={0.5} // 0 is fully transparent, 1 is fully opaque
      />
    </Sphere>
  );
};

export default SphereComponent;
