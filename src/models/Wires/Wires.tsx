import { useGLTF } from "@react-three/drei";

import { GLTFResult } from "./types";
import wiresModalModel from "./Wires.glb";

export const Wires = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    wiresModalModel
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wires_low_compose.geometry}
        material={materials["Material.002"]}
        position={[7.265, 3.982, 9.95]}
      />
    </group>
  );
};

useGLTF.preload(wiresModalModel);
