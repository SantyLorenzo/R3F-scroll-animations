import { GLTF } from "three-stdlib";

export type DoorsProps = JSX.IntrinsicElements["group"] & {
  mainAnimationTime: number;
};

export type ActionName = "dor_low.001Action.001" | "dor_lowAction.002";

export type DoorsTypes = THREE.Group & {
  mainAnimationTime: number | undefined;
};

export interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

export type GLTFResult = GLTF & {
  nodes: {
    dor_low: THREE.Mesh;
    dor_Low_2: THREE.Mesh;
  };
  materials: {
    ["Material.008"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};
