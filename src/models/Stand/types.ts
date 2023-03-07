import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Image_high: THREE.Mesh;
    Display_low: THREE.Mesh;
    Stand_low: THREE.Mesh;
  };
  materials: {
    ["Material.028"]: THREE.MeshStandardMaterial;
  };
};
