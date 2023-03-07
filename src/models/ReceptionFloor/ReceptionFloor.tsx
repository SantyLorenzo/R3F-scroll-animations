import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import receptionFloorModel from "./Reception_floor.glb";
import { GLTFResult } from "./types";

export const ReceptionFloor = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    receptionFloorModel
  ) as unknown as GLTFResult;
  const { x, y, z } = useControls("Reception Floor", {
    x: 3,
    y: 3.18,
    z: 9.1,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Reception_floop_low.geometry}
        material={materials["Material.073"]}
        position={[x, y, z]}
        scale={1.2}
      />
    </group>
  );
};

useGLTF.preload(receptionFloorModel);
