import { useGLTF } from "@react-three/drei";

import miniTerminalModel from "./Mini_Terminal.glb";
import { GLTFResult } from "./types";

export const MiniTerminal = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    miniTerminalModel
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mini_Terminal_Low.geometry}
        material={materials["Material.063"]}
        position={[6.2, 4.05, 9.88]}
        scale={0.9}
      />
    </group>
  );
};

useGLTF.preload(miniTerminalModel);
