import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Panel: THREE.Mesh;
  };
  materials: {
    ["Material.059"]: THREE.MeshStandardMaterial;
  };
};
