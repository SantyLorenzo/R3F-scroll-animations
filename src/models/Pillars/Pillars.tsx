import { useGLTF } from "@react-three/drei";

import pillarsModel from "./pillars.glb";
import { GLTFResult } from "./types";

export const Pillars = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(pillarsModel) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Element_01_low.geometry}
        material={materials["Material.082"]}
        position={[3, 3.18, 9.1]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </group>
  );
};

useGLTF.preload(pillarsModel);
