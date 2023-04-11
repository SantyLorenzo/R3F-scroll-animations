import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    front_wall_into_the_tunnel: THREE.Mesh;
  };
  materials: {
    ["Material.017"]: THREE.MeshStandardMaterial;
  };
};