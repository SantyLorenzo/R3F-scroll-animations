import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Wall_tunnel_low: THREE.Mesh;
  };
  materials: {
    ["Material.091"]: THREE.MeshStandardMaterial;
  };
};