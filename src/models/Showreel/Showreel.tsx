import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "./types";
import showreelModel from "./Showreel.glb";

export function Showreel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(showreelModel) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane043.geometry}
        material={materials["Material.084"]}
        position={[3.4, 3.67, 6.3]}
        rotation={[0, -0.3, 0]}
      />
    </group>
  );
}

useGLTF.preload(showreelModel);