import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Reception_floop_low: THREE.Mesh;
  };
  materials: {
    ["Material.073"]: THREE.MeshStandardMaterial;
  };
};
