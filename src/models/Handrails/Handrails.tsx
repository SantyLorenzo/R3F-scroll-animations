import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import handrailsModel from "./Handrails.glb";
import { GLTFResult } from "./types";

export const Handrails = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(handrailsModel) as unknown as GLTFResult;
  const { x, y, z } = useControls("Handrails", {
    x: 7.96,
    y: 4.05,
    z: 9.93,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handrails_low.geometry}
        material={materials["Material.056"]}
        position={[x, y, z]}
        rotation={[-0.18, -0.04, 0.24]}
      />
    </group>
  );
};

useGLTF.preload(handrailsModel);
