import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "./types";
import frontWallIntoTheTunnelModel from "./front_wall_into_the_tunnel.glb";

export function FrontWallIntoTheTunnel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    frontWallIntoTheTunnelModel
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.front_wall_into_the_tunnel.geometry}
        material={materials["Material.017"]}
        position={[0.9, 4.45, 3]}
        rotation={[0, 0.03, 0]}
      />
    </group>
  );
}

useGLTF.preload(frontWallIntoTheTunnelModel);