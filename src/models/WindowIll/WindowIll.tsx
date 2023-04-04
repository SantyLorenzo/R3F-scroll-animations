import { useGLTF } from "@react-three/drei";

import { GLTFResult } from "./types";
import windowsillModel from "./Windowsill.glb";

export const Windowsill = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    windowsillModel
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Windowsill_low.geometry}
        material={materials["Material.038"]}
        position={[7.62, 3.7, 9.84]}
        scale={1}
      />
    </group>
  );
};

useGLTF.preload(windowsillModel);
