import React, { useRef, useEffect } from 'react';
import { Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const Tooltip = ({ position, text }) => {
  const tooltipRef = useRef();
  const { camera } = useThree(); // Access the camera from the context

  // Make the tooltip face the camera
  useFrame(() => {
    if (tooltipRef.current) {
      tooltipRef.current.lookAt(camera.position);
    }
  });

  return (
    <mesh ref={tooltipRef} position={position}>
      <planeGeometry args={[1, 0.5]} /> {/* Adjust size as needed */}
      <meshStandardMaterial color="#666" />
      <Text
        color="#FFF"
        fontSize={0.1}
        maxWidth={2.8}
        lineHeight={1.5}
        textAlign="center"
        position={[0, 0, 0.01]} // Slightly offset for visibility
      >
        {text}
      </Text>
    </mesh>
  );
};

export default Tooltip;
