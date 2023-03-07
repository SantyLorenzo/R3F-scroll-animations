import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import partitionModel from "./partition.glb";
import { GLTFResult } from "./types";

export const Partition = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(partitionModel) as unknown as GLTFResult;
  const { x, y, z } = useControls("Partition", {
    x: 6.08,
    y: 4,
    z: 9.17,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Partition_low.geometry}
        material={materials["Material.061"]}
        position={[x, y, z]}
      />
    </group>
  );
};

useGLTF.preload(partitionModel);
