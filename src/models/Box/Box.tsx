import { useGLTF } from "@react-three/drei";
import BoxModel from "./box.glb";
import { GLTFResult } from "./types";

export const Box = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(BoxModel) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Box_start_low.geometry}
        material={materials["Material.037"]}
        position={[7.1, 3.997, 9.97]}
      />
    </group>
  );
};

useGLTF.preload(BoxModel);
