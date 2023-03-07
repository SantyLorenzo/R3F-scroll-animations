import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Illuminatior_low: THREE.Mesh;
  };
  materials: {
    ["Material.013"]: THREE.MeshStandardMaterial;
  };
};
