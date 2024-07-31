import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGLTF } from "@react-three/drei";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@/components/toolTip.jsx";
import SphereComponent from "@/components/sphereCom";

export const Rover = (props) => {
  const { nodes, materials } = useGLTF("/rover2.gltf");
  const [hoveredMesh, setHoveredMesh] = useState(null);

  const handlePointerOver = (meshName) => {
    setHoveredMesh(meshName);
  };

  const handlePointerOut = () => {
    setHoveredMesh(null);
  };

  // Navigation
  const navigate = useNavigate();

  function handleRear() {
    navigate("/gallery/RHAZ");
  }

  function handleProb() {
    navigate("/gallery/MAHLI");
  }

  function handleNav() {
    navigate("/gallery/NAVCAM");
  }

  function handleChem() {
    navigate("/gallery/CHEMCAM");
  }

  function handleMast() {
    navigate("/gallery/MAST");
  }

  function handleDescent() {
    navigate("/gallery/MARDI");
  }

  useEffect(() => {
    document.body.style.cursor = hoveredMesh ? "pointer" : "auto";
  }, [hoveredMesh]);

  return (
    <group {...props} dispose={null}>
      <group position={[1.063, -0.7, 0.72]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.wheels} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.tex_02} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.tex_01} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.parts_AO} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.tex_03} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.tex_05} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.tex_04} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.tex_03a} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.internals} />

        {/*Right nav cam:*/}
        <SphereComponent
          radius={0.05}
          position={[-1.35, 1.72, -0.28]}
          handleClick={handleNav}
          handlePointerOver={() => handlePointerOver("Navigation Camera")}
          handlePointerOut={handlePointerOut}
          hovered={hoveredMesh === "Navigation Camera"} // Convert hover prop to bool
        />

        {/*Left nav cam:*/}
        <SphereComponent
          radius={0.05}
          position={[-1.8, 1.72, -0.28]}
          handleClick={handleNav}
          handlePointerOver={() => handlePointerOver("Navigation Camera")}
          handlePointerOut={handlePointerOut}
          hovered={hoveredMesh === "Navigation Camera"}
        ></SphereComponent>

        {/*Mars Hand Lens Imager:*/}
        <SphereComponent
          radius={0.08}
          position={[-0.62, 1.66, 0.64]}
          handleClick={handleProb}
          handlePointerOver={() => handlePointerOver("Mars Hand Lens Imager")}
          handlePointerOut={handlePointerOut}
          hovered={hoveredMesh === "Mars Hand Lens Imager"}
        ></SphereComponent>

        {/*Right rear hazcam:*/}
        <SphereComponent
          radius={0.11}
          position={[-0.56, 0.55, -2.1]}
          handleClick={handleRear}
          handlePointerOver={() =>
            handlePointerOver("Rover Hazard Avoidance Camera")
          }
          handlePointerOut={handlePointerOut}
          hovered={hoveredMesh === "Rover Hazard Avoidance Camera"}
        ></SphereComponent>

        {/*Left rear hazcam:*/}
        <SphereComponent
          radius={0.11}
          position={[-1.56, 0.55, -2.1]}
          handleClick={handleRear}
          handlePointerOver={() =>
            handlePointerOver("Rover Hazard Avoidance Camera")
          }
          handlePointerOut={handlePointerOut}
          hovered={hoveredMesh === "Rover Hazard Avoidance Camera"}
        ></SphereComponent>

        {/*Front left hazcams:*/}
        <SphereComponent
          radius={0.18}
          position={[-1.02, 0.5, -0.28]}
          handleClick={handleRear}
          handlePointerOver={() =>
            handlePointerOver("Rover Hazard Avoidance Camera")
          }
          handlePointerOut={handlePointerOut}
          hovered={hoveredMesh === "Rover Hazard Avoidance Camera"}
        ></SphereComponent>

        {/*ChemCam:*/}
        <SphereComponent
          radius={0.08}
          position={[-1.47, 1.88, -0.28]}
          handleClick={handleChem}
          handlePointerOver={() => handlePointerOver("ChemCam")}
          handlePointerOut={handlePointerOut}
          hovered={hoveredMesh === "ChemCam"}
        ></SphereComponent>

        {/*Mast right:*/}
        <SphereComponent
          radius={0.05}
          position={[-1.46, 1.72, -0.28]}
          handleClick={handleMast}
          handlePointerOver={() => handlePointerOver("Mastcam")}
          handlePointerOut={handlePointerOut}
          hovered={hoveredMesh === "Mastcam"}
        ></SphereComponent>

        {/*Mast left:*/}
        <SphereComponent
          radius={0.05}
          position={[-1.7, 1.72, -0.28]}
          handleClick={handleMast}
          handlePointerOver={() => handlePointerOver("Mastcam")}
          handlePointerOut={handlePointerOut}
          hovered={hoveredMesh === "Mastcam"}
        ></SphereComponent>

        {/*Mars Descent Imager:*/}
        <SphereComponent
          radius={0.07}
          position={[-0.42, 0.43, -0.42]}
          handleClick={handleDescent}
          handlePointerOver={() => handlePointerOver("Mars Descent Imager")}
          handlePointerOut={handlePointerOut}
          hovered={hoveredMesh === "Mars Descent Imager"}
        ></SphereComponent>

        {hoveredMesh && <Tooltip position={[-1, 2.5, -1]} text={hoveredMesh} />}
      </group>
    </group>
  );
};

useGLTF.preload("/rover2.gltf");
