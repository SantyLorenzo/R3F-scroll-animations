import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import { GLTFResult } from "./types";
import windowsillModel from "./Windowsill.glb";

export const Windowsill = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    windowsillModel
  ) as unknown as GLTFResult;
  const { x, y, z } = useControls("Windows Ill", {
    x: 7.62,
    y: 3.7,
    z: 9.84,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Windowsill_low.geometry}
        material={materials["Material.057"]}
        position={[x, y, z]}
        // scale={0.9}
      />
    </group>
  );
};

useGLTF.preload(windowsillModel);
