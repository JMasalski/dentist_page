/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf 
Author: wozniakowski.smierdzi (https://sketchfab.com/wozniakowski.smierdzi)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/dentist-tools-05496bd4a33548a68f31cc5cc86be521
Title: dentist tools
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('public/scene/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.528}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes.Object_7.geometry} material={materials['Material.001']} position={[3.355, 0, 0]} rotation={[-Math.PI, 1.343, -Math.PI]} scale={0.528} />
    </group>
  )
}

useGLTF.preload('public/scene/scene.gltf')
