import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGLTF } from "@react-three/drei";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tooltip from "@/components/toolTip.jsx";
import SphereComponent from '@/components/sphereComponent.jsx'; 


export const Rover2 = (props) => {
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
    toast.info("Rover Hazard Avoidance Camera selected", {
      position: "top-right",
      autoClose: 1500, // [ms]
    });
    setTimeout(() => {
      navigate("/gallery/RHAZ");
    }, 2200);
  }

  function handleProb() {
    toast.info("Mars Hand Lens Imager selected", {
      position: "top-right",
      autoClose: 1500,
    });
    setTimeout(() => {
      navigate("/gallery/MAHLI");
    }, 2200);
  }

  function handleNav() {
    toast.info("Navigation Camera selected", {
      position: "top-right",
      autoClose: 1500,
    });
    setTimeout(() => {
      navigate("/gallery/NAVCAM");
    }, 2200);
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
        <mesh
          onClick={handleRear}
          geometry={nodes.Object_7.geometry}
          material={materials.parts_AO}
          onPointerOver={() => handlePointerOver("Rover Hazard Avoidance Camera")}
          onPointerOut={handlePointerOut}
        />
        <mesh
          onClick={handleProb}
          geometry={nodes.Object_8.geometry}
          material={materials.tex_03}
          onPointerOver={() => handlePointerOver("Mars Hand Lens Imager")}
          onPointerOut={handlePointerOut}
        />
        <mesh geometry={nodes.Object_9.geometry} material={materials.tex_05} />
        <mesh
          onClick={handleNav}
          geometry={nodes.Object_10.geometry}
          material={materials.tex_04}
          onPointerOver={() => handlePointerOver("Navigation Camera")}
          onPointerOut={handlePointerOut}
        />
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.tex_03a}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.internals}
        />
        <SphereComponent></SphereComponent>
        
         {hoveredMesh && (
        <Tooltip
          position={[-1, 2.5, -1]} // Adjust the position as needed
          text={hoveredMesh}
        />
      )}
      </group>
    </group>
  );
};

useGLTF.preload("/rover2.gltf");
