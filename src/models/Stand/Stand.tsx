import { useGLTF } from "@react-three/drei";

import standModel from "./Stand.glb";
import { GLTFResult } from "./types";

export const Stand = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(standModel) as unknown as GLTFResult;

  //@ts-ignore
  materials["Material.028"].color = {
    r: 0,
    g: 0,
    b: 0,
    isColor: true,
  }
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Image_high.geometry}
        material={materials["Material.028"]}
        position={[1.8, 4 + 0.17, 6.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Display_low.geometry}
        material={materials["Material.028"]}
        position={[1.8, 4 + 0.025, 6.3 + 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stand_low.geometry}
        material={materials["Material.028"]}
        position={[1.8, 4 - 0.66, 6.3]}
      />
    </group>
  );
};

useGLTF.preload(standModel);
