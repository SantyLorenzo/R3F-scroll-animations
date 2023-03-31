import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Element_01_low: THREE.Mesh;
  };
  materials: {
    ["Material.082"]: THREE.MeshStandardMaterial;
  };
};
