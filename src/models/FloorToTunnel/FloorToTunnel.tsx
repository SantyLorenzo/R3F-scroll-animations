import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "./types";
import FloorModel from "./Floor_to_tunnel.glb";

export function FloorToTunnel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(FloorModel) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane015.geometry}
        material={materials["Material.106"]}
        position={[2.55, 3.225, 4.5]}
        rotation={[0, 0.44, 0]}
        scale={[1.65, 1, 1.1]}
      />
    </group>
  );
}

useGLTF.preload(FloorModel);