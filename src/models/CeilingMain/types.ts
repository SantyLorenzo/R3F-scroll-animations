import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Ceiling_main_low: THREE.Mesh;
  };
  materials: {
    ["Material.076"]: THREE.MeshStandardMaterial;
  };
};
