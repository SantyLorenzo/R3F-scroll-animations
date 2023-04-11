import { useGLTF } from "@react-three/drei";
import projectorLight from "./lite.glb";
import { GLTFResult } from "./types";

export function ProjectorLight(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(projectorLight) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane041.geometry}
        material={materials["Material.089"]}
        position={[3.55 + 0.2, 3.91, 6.04]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane040.geometry}
        material={materials["Material.089"]}
        position={[2.8 + 0.2, 3.91, 6.06]}
      />
    </group>
  );
}

useGLTF.preload(projectorLight);