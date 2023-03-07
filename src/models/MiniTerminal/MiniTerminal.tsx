import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";

import miniTerminalModel from "./Mini_Terminal.glb";
import { GLTFResult } from "./types";

export const MiniTerminal = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    miniTerminalModel
  ) as unknown as GLTFResult;
  const { x, y, z } = useControls("Mini Terminal", {
    x: 6.2,
    y: 4.05,
    z: 9.88,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mini_Terminal_Low.geometry}
        material={materials["Material.063"]}
        position={[x, y, z]}
        scale={0.9}
      />
    </group>
  );
};

useGLTF.preload(miniTerminalModel);
