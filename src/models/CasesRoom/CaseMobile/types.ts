import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    mobile: THREE.Mesh;
  };
  materials: {
    ["Material.179"]: THREE.MeshStandardMaterial;
  };
};
