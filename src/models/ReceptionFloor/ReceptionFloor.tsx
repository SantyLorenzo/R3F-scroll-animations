import { useGLTF } from "@react-three/drei";

import receptionFloorModel from "./Reception_floor.glb";
import { GLTFResult } from "./types";

export const ReceptionFloor = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    receptionFloorModel
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Reception_floop_low.geometry}
        material={materials["Material.073"]}
        position={[3, 3.18, 9.1]}
        scale={1.2}
      />
    </group>
  );
};

useGLTF.preload(receptionFloorModel);
