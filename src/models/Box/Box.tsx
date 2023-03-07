import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import BoxModel from "./box.glb";
import { GLTFResult } from "./types";

export const Box = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(BoxModel) as unknown as GLTFResult;
  const { x, y, z } = useControls("Box", {
    x: 7.1,
    y: 3.997,
    z: 9.97,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Box_start_low.geometry}
        material={materials["Material.037"]}
        position={[x, y, z]}
      />
    </group>
  );
};

useGLTF.preload(BoxModel);
