import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTFResult } from "./types";
import mobileModel from "./Mobile.glb";

export function Mobile(props: JSX.IntrinsicElements["group"]) {
    const { nodes, materials } = useGLTF(mobileModel) as GLTFResult;

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane016.geometry}
                material={materials["Material.040"]}
                position={[3.6, 4.2, 8.95]}
                rotation={[1.8, 0.2, -1.8]}
                scale={0.1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.iphone_low.geometry}
                material={materials["Material.026"]}
                position={[3.6, 4.2, 9.05]}
                rotation={[0.9, -1.2, 0.7]}
                scale={0.2}
            />
        </group>
    )   
}

useGLTF.preload(mobileModel);
