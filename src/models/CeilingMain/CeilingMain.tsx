import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import ceilingMainModel from "./Ceiling_main.glb";
import { GLTFResult } from "./types";

export const CeilingMain = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    ceilingMainModel
  ) as unknown as GLTFResult;

  const { x, y, z } = useControls("Ceiling Main", {
    x: 0.5,
    y: 5.16,
    z: 9.1,
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ceiling_main_low.geometry}
        material={materials["Material.076"]}
        position={[x, y, z]}
        rotation={[-Math.PI, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload(ceilingMainModel);
