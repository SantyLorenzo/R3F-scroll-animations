import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import { GLTFResult } from "./types";
import wiresModalModel from "./Wires.glb";

export const Wires = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    wiresModalModel
  ) as unknown as GLTFResult;

  const { x, y, z } = useControls("Wires", {
    x: 7.265,
    y: 3.982,
    z: 9.95,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wires_low_compose.geometry}
        material={materials["Material.002"]}
        position={[x, y, z]}
      />
    </group>
  );
};

useGLTF.preload(wiresModalModel);
