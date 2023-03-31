import { useGLTF } from "@react-three/drei";

import { GLTFResult } from "./types";
import wallWithPanels from "./Wall_with_panels.glb";

export const WallWithPanels = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(wallWithPanels) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_with_panels_low.geometry}
        material={materials["Material.086"]}
        position={[2, 4.2, 6.24]}
      />
    </group>
  );
};

useGLTF.preload(wallWithPanels);
