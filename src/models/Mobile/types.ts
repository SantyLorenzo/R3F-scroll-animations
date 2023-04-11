import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Plane016: THREE.Mesh;
    iphone_low: THREE.Mesh;
  };
  materials: {
    ["Material.040"]: THREE.MeshStandardMaterial;
    ["Material.026"]: THREE.MeshStandardMaterial;
  };
};