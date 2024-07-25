/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 rover2.gltf 
Author: Cybertron B-127 (https://sketchfab.com/robo-reboot)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/curiosity-mars-rover-6cab1b08f20a4408960413ff44694b36
Title: Curiosity Mars rover
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export const Rover2 = (props) => {
  const { nodes, materials } = useGLTF('/rover2.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[1.063, 0.249, 1.095]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.wheels} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.tex_02} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.tex_01} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.parts_AO} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.tex_03} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.tex_05} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.tex_04} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.tex_03a} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.internals} />
      </group>
    </group>
  )
}

useGLTF.preload('/rover2.gltf')
