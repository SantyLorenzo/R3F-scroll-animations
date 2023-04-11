import { GLTF } from "three-stdlib";

export type GLTFResult = GLTF & {
  nodes: {
    Mini_Terminal_Low: THREE.Mesh;
  };
  materials: {
    ["Material.063"]: THREE.MeshStandardMaterial;
  };
};
