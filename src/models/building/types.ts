import { GLTF } from "three-stdlib"
import * as THREE from "three";

export type ActionName = "Action.008" | "Action.004" | "Action.005" | "Circle.007Action"

export interface GLTFAction extends THREE.AnimationClip {
    name: ActionName;
}

export type GLTFResult = GLTF & {
  nodes: {
    CameraHelperCube: THREE.Mesh
    First_room: THREE.Mesh
    Handrail: THREE.Mesh
    Highlighting_cases: THREE.Mesh
    Last_room: THREE.Mesh
    Object_case: THREE.Mesh
    Object_what_we_do: THREE.Mesh
    Object_worldwide: THREE.Mesh
    Rack: THREE.Mesh
    Room_cases: THREE.Mesh
    Second_door1: THREE.Mesh
    Second_door2: THREE.Mesh
    Second_room: THREE.Mesh
    Ship_skin: THREE.Mesh
    Stand_cases: THREE.Mesh
    Text_image_20_ear_business: THREE.Mesh
    Text_Image_400_emploees: THREE.Mesh
    Text_image_MORE_THAN_50_000_000: THREE.Mesh
    Tube: THREE.Mesh
    ["Debugging_element(for_text)"]: THREE.Mesh
    Corridor_into_the_pipe: THREE.Mesh
    Cube002: THREE.Mesh
    Cube003: THREE.Mesh
    ["1000+_apps"]: THREE.Mesh
  }
  materials: {
    ["Material.006"]: THREE.MeshStandardMaterial
    ["Material.002"]: THREE.MeshStandardMaterial
    ["Material.010"]: THREE.MeshStandardMaterial
    ["Material.012"]: THREE.MeshStandardMaterial
    ["Material.007"]: THREE.MeshStandardMaterial
  },
  animations: GLTFAction[];
}