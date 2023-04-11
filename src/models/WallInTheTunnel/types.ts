import * as THREE from "three";
import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    wall_in_the_tunnel_low: THREE.Mesh;
  };
  materials: {
    ["Material.114"]: THREE.MeshStandardMaterial;
  };
};