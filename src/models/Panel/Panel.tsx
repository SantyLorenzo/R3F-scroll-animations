import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import panelModel from "./Panel.glb";
import { GLTFResult } from "./types";

export const Panel = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(panelModel) as unknown as GLTFResult;
  const { x, y, z } = useControls("Panel", {
    x: 7.45,
    y: 3.79,
    z: 9.73,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Panel.geometry}
        material={materials["Material.059"]}
        position={[x, y, z]}
        // scale={0.5}
      />
    </group>
  );
};

useGLTF.preload(panelModel);
