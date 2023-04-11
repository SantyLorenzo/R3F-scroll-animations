import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import doorsModel from "./door.glb";
import { DoorsProps, GLTFResult } from "./types";

export function Doors({ mainAnimationTime, ...props }: DoorsProps) {
  const group = useRef<THREE.Group>(null);
  const leftDoorRef = useRef<THREE.Mesh>(null);
  const rightDoorRef = useRef<THREE.Mesh>(null);
  const { nodes, materials } = useGLTF(doorsModel) as unknown as GLTFResult;

  useFrame(() => {
    if (leftDoorRef.current && rightDoorRef.current && mainAnimationTime > 2) {
      leftDoorRef.current.position.z = 9.37 + (mainAnimationTime - 2) * 0.4;
      rightDoorRef.current.position.z = 8.97 - (mainAnimationTime - 2) * 0.4;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          ref={leftDoorRef}
          name="dor_low"
          castShadow
          receiveShadow
          geometry={nodes.dor_low.geometry}
          material={materials["Material.008"]}
          position={[6.1, 3.92, 8.97 + 0.41]}
        />
        <mesh
          ref={rightDoorRef}
          name="dor_Low_2"
          castShadow
          receiveShadow
          geometry={nodes.dor_Low_2.geometry}
          material={materials["Material.008"]}
          position={[6.1, 3.92, 8.97]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(doorsModel);
