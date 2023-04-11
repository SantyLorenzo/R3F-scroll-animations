import { useGLTF } from "@react-three/drei";
import { GLTFResult } from "./types";
import pipeModel from "./Pipe.glb";

export function Pipe(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(pipeModel) as GLTFResult;
  return (
    <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.pipe_low.geometry}
            material={materials["Material.088"]}
            position={[3.3, 3.25, 9]}
            scale={[1.2, 1.2, 1.2]}
        />
    </group>
  );
}

useGLTF.preload(pipeModel);
