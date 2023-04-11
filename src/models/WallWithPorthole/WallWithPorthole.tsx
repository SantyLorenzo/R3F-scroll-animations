import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "./types";
import wallWithPortholeModel from "./Wall_with_porthole_main.glb";

export function WallWithPorthole(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(wallWithPortholeModel) as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.The_column_is_large_low001.geometry}
        material={materials["Material.075"]}
        position={[1, 3.6, 6.45]}
        scale={[1, 1, 1]}
      />
    </group>
  );
}

useGLTF.preload(wallWithPortholeModel);