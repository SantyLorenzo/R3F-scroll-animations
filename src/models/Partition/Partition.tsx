import { useGLTF } from "@react-three/drei";

import partitionModel from "./partition.glb";
import { GLTFResult } from "./types";

export const Partition = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(partitionModel) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Partition_low.geometry}
        material={materials["Material.061"]}
        position={[6.08, 4, 9.17]}
      />
    </group>
  );
};

useGLTF.preload(partitionModel);
