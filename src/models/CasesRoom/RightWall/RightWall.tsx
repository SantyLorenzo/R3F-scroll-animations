import { useGLTF } from "@react-three/drei";
import caseRightWallModel from "./case_right_wall.glb";
import { GLTFResult } from "./types";

export const RightWall = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    caseRightWallModel
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Case_right_wall_low.geometry}
        material={materials["Material.176"]}
        position={[-2, -6.25, -6.85]}
      />
    </group>
  );
};

useGLTF.preload(caseRightWallModel);
