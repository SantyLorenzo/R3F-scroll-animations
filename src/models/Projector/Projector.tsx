import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "./types";
import projectorModel from "./projector.glb";

export function Projector(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(projectorModel) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.projector_low.geometry}
        material={materials["Material.097"]}
        position={[3.9, 3.9, 6.3]}
        
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.projector_low001.geometry}
        material={materials["Material.097"]}
        position={[2.8, 3.9, 6.3]}
        rotation={[0, -0.03, -3.14]}
      />
    </group>
  );
}

useGLTF.preload(projectorModel);