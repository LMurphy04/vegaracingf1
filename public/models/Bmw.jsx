/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 bmw.glb 
Author: 𝙎𝙍𝙏 𝙋𝙚𝙧𝙛𝙤𝙢𝙖𝙣𝙘𝙚™ (https://sketchfab.com/TheRealSRT)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bmw-m4-competition-m-package-5c0a2dafb1ad408d9fc9eeef9aee531b
Title: BMW M4 Competition M Package
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/bmw.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-286.371, 0, 164.751]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.Meshesblack161Mtl} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.Meshespiggrill1Mtl} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.Mesheszx1Mtl} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Mesheszx1Mtl} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.Mesheswhite41Mtl} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.Meshesraidiator1Mtl} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.Meshesinterior71Mtl} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.Meshespillars1Mtl} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.Meshespillars1Mtl} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.Meshesheadlight51Mtl} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.Mesheslogo11Mtl} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.Meshesdash11Mtl} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.Mesheschrome51Mtl} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.Meshesredlight1Mtl} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.Meshesinterior231Mtl} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.Meshesinterior181Mtl} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.Mesheslight51Mtl} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.Meshesengine51Mtl} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.Meshesled11Mtl} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Meshesbody151Mtl} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.Meshesblack151Mtl} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.Mesheswindows1Mtl} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Mesheslogo31Mtl} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.Meshesled111Mtl} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.Mesheslivery1Mtl} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Meshestail71Mtl} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.Meshesff41Mtl} />
      </group>
      <group position={[-286.371, 0, 164.751]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_32.geometry} material={materials.Caliper1Mtl} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.Meshesm8rim1Mtl} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.Meshesm8rim0011Mtl} />
      </group>
    </group>
  )
}

useGLTF.preload('/bmw.glb')
