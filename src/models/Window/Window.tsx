import { useGLTF } from "@react-three/drei";

import { GLTFResult } from "./types";
import windowModel from "./window.glb";

export const Window = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(windowModel) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Illuminatior_low.geometry}
        material={materials["Material.013"]}
        position={[7.6, 4, 10]}
        rotation={[-0.17, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload(windowModel);
