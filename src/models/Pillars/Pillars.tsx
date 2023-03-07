import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import pillarsModel from "./pillars.glb";
import { GLTFResult } from "./types";

export const Pillars = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(pillarsModel) as unknown as GLTFResult;

  const { x, y, z } = useControls("Pillars", {
    x: 3,
    y: 3.18,
    z: 9.1,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Element_01_low.geometry}
        material={materials["Material.082"]}
        position={[x, y, z]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
};

useGLTF.preload(pillarsModel);
