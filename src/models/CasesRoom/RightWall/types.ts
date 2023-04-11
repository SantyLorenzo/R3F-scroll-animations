import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Case_right_wall_low: THREE.Mesh;
  };
  materials: {
    ["Material.176"]: THREE.MeshStandardMaterial;
  };
};