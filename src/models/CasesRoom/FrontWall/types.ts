import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    case_front_wall_low: THREE.Mesh;
  };
  materials: {
    ["Material.172"]: THREE.MeshStandardMaterial;
  };
};