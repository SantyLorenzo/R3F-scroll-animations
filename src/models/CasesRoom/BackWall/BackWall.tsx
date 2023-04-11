import { useGLTF } from "@react-three/drei";
import caseBackWallModel from "./case_back_wall.glb";
import { GLTFResult } from "./types";

export const BackWall = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    caseBackWallModel
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.case_back_wall_low.geometry}
        material={materials["Material.173"]}
        position={[-4.20, -6.06, -3]}
      />
    </group>

  );
};

useGLTF.preload(caseBackWallModel);
