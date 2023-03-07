import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import { GLTFResult } from "./types";
import windowModel from "./window.glb";

export const Window = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(windowModel) as unknown as GLTFResult;
  const { x, y, z } = useControls("Window", {
    x: 7.6,
    y: 4,
    z: 10,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Illuminatior_low.geometry}
        material={materials["Material.013"]}
        position={[x, y, z]}
        rotation={[-0.17, 0, 0]}
      />
    </group>
  );
};

useGLTF.preload(windowModel);
