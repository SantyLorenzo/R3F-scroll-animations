import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    case_back_wall_low: THREE.Mesh;
  };
  materials: {
    ["Material.173"]: THREE.MeshStandardMaterial;
  };
};
