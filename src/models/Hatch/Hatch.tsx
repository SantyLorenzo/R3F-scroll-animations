import { useGLTF } from "@react-three/drei";

import hatchModel from "./Hatch.glb";
import { GLTFResult } from "./types";

export const Hatch = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(hatchModel) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hatch_low.geometry}
        material={materials["Material.081"]}
        position={[3.35, 3.89, 6.24]}
      />
    </group>
  );
};

useGLTF.preload(hatchModel);
