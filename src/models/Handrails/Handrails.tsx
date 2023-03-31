import { useGLTF } from "@react-three/drei";

import handrailsModel from "./Handrails.glb";
import { GLTFResult } from "./types";

export const Handrails = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(handrailsModel) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Handrails_low.geometry}
        material={materials["Material.056"]}
        position={[7.96, 4.05, 9.93]}
        rotation={[-0.18, -0.04, 0.24]}
      />
    </group>
  );
};

useGLTF.preload(handrailsModel);
