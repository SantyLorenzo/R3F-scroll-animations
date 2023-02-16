import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTFAction, GLTFResult } from "./types";
import { useFrame } from "@react-three/fiber";

type DoorsProps = THREE.Group & {
  mainAnimationTime: number;
}

export function Doors({ mainAnimationTime, ...props }: DoorsProps) {
  const group = useRef<THREE.Group>(null);
  const door1Ref = useRef<THREE.Mesh>(null);
  const door2Ref = useRef<THREE.Mesh>(null);
  const { nodes, materials } = useGLTF("/doors.glb") as unknown as GLTFResult;

  useFrame(() => {
    if(door1Ref.current && door2Ref.current && mainAnimationTime > 2) {
      door1Ref.current.position.z = 9.37 + (mainAnimationTime - 2) * 0.4;
      door2Ref.current.position.z = 8.97 - (mainAnimationTime - 2) * 0.4;
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          ref={door1Ref}
          name="dor_low"
          castShadow
          receiveShadow
          geometry={nodes.dor_low.geometry}
          material={materials["Material.008"]}
          position={[6.1, 3.95, 9.37]}
          scale={1.04}
        />
        <mesh
          ref={door2Ref}
          name="dor_Low_2"
          castShadow
          receiveShadow
          geometry={nodes.dor_Low_2.geometry}
          material={materials["Material.008"]}
          position={[6.1, 3.95, 8.97]}
          scale={1.04}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Door.glb");
