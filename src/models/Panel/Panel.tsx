import { useGLTF } from "@react-three/drei";

import panelModel from "./Panel.glb";
import { GLTFResult } from "./types";

export const Panel = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(panelModel) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Panel.geometry}
        material={materials["Material.059"]}
        position={[7.45, 3.79, 9.73]}
      />
    </group>
  );
};

useGLTF.preload(panelModel);
