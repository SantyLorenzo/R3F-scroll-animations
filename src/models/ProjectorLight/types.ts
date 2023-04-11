import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Plane041: THREE.Mesh;
    Plane040: THREE.Mesh;
  };
  materials: {
    ["Material.089"]: THREE.MeshStandardMaterial;
  };
};