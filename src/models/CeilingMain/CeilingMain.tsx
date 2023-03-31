import { useGLTF } from "@react-three/drei";

import ceilingMainModel from "./Ceiling_main.glb";
import { GLTFResult } from "./types";

export const CeilingMain = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    ceilingMainModel
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ceiling_main_low.geometry}
        material={materials["Material.076"]}
        position={[0.5, 5.16, 9.1]}
        rotation={[-Math.PI, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload(ceilingMainModel);
