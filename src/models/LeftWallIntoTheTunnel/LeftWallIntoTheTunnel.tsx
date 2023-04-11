import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "./types";
import leftWallIntoTheTunnelModel from "./wall_tunnel.glb";

export function LeftWallIntoTheTunnel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(leftWallIntoTheTunnelModel) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_tunnel_low.geometry}
        material={materials["Material.091"]}
        position={[1.95, 4, 5.7]}
        rotation={[0, 0.08, 0]}
      />
    </group>
  );
}

useGLTF.preload(leftWallIntoTheTunnelModel);
