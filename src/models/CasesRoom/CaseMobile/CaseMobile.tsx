import { useGLTF } from "@react-three/drei";
import caseMobileModel from "./case_mobile.glb";
import { GLTFResult } from "./types";

export const CaseMobile = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    caseMobileModel
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mobile.geometry}
        material={materials["Material.179"]}
        // position={[-116.28, -46.85, 106.92]}
        position={[-4.2, -5.8, -4.4]}
        rotation={[0.3, 2, -0.22]}
      />
    </group>
  );
};

useGLTF.preload(caseMobileModel);
