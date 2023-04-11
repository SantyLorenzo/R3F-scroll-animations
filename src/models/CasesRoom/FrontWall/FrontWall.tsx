import { useGLTF } from "@react-three/drei";
import caseFrontWallModel from "./case_front_wall.glb";
import { GLTFResult } from "./types";
import { useControls } from "leva";

export const FrontWall = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    caseFrontWallModel
  ) as unknown as GLTFResult;
  // const { x, y, z } = useControls({ x: -4.1, y: -5.87, z: -7.8 })

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.case_front_wall_low.geometry}
        material={materials["Material.172"]}
        position={[-4.1, -5.87, -7.8]}
        rotation={[-Math.PI, 1.1, -Math.PI]}
        // position={[x, y, z]}
      />
    </group>

  );
};

useGLTF.preload(caseFrontWallModel);
