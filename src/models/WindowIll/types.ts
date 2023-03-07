import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    [x: string]: any;
    Windowsill_low: THREE.Mesh;
  };
  materials: {
    ["Material.057"]: THREE.MeshStandardMaterial;
  };
};
