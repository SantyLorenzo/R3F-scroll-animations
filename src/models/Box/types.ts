import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Box_start_low: THREE.Mesh;
  };
  materials: {
    ["Material.037"]: THREE.MeshStandardMaterial;
  };
};
