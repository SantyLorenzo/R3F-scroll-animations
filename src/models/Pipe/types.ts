import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    pipe_low: THREE.Mesh;
  };
  materials: {
    ["Material.088"]: THREE.MeshStandardMaterial;
  };
};