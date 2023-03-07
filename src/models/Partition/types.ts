import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Partition_low: THREE.Mesh;
  };
  materials: {
    ["Material.061"]: THREE.MeshStandardMaterial;
  };
};
