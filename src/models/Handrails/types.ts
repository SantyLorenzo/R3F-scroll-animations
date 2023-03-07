import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Handrails_low: THREE.Mesh;
  };
  materials: {
    ["Material.056"]: THREE.MeshStandardMaterial;
  };
};
