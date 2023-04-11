import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    projector_low: THREE.Mesh;
    projector_low001: THREE.Mesh;
  };
  materials: {
    ["Material.097"]: THREE.MeshStandardMaterial;
  };
};