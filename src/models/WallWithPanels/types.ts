import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Wall_with_panels_low: THREE.Mesh;
  };
  materials: {
    ["Material.086"]: THREE.MeshStandardMaterial;
  };
};

export type WallWithPanelsProps = 
  JSX.IntrinsicElements["group"] & {
    position?: number[]
  }