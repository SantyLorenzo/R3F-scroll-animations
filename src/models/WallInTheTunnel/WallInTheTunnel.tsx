import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "./types";
import wallInTheTunnelModel from "./wall_in_the_tunnel.glb"

export function WallInTheTunnel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(wallInTheTunnelModel) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_in_the_tunnel_low.geometry}
        material={materials["Material.114"]}
        position={[2.85, 4.5, 2.1]}
        rotation={[0, 0.43, 0]}
      />
    </group>
  );
}

useGLTF.preload(wallInTheTunnelModel);