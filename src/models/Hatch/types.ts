import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    hatch_low: THREE.Mesh;
  };
  materials: {
    ["Material.081"]: THREE.MeshStandardMaterial;
  };
};
