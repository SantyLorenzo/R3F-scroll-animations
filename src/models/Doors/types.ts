import { GLTF } from 'three-stdlib'

export type ActionName = 'Dor_02_Low' | 'Dor_01_Low'

export type DoorsTypes = THREE.Group & {
    mainAnimationTime: number | undefined;
}

export interface GLTFAction extends THREE.AnimationClip {
    name: ActionName;
}

export type GLTFResult = GLTF & {
    nodes: {
        Dor_02_Low: THREE.Mesh
        Dor_01_Low: THREE.Mesh
    }
    materials: {
        ['Material.044']: THREE.MeshStandardMaterial
    }
    animations: GLTFAction[];
}