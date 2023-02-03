import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";

export function Building(props) {
  const group = useRef();
  const scroll = useScroll();
  const cameraRef = useRef(null)
  const trackingCameraRef = useRef(null)
  const { nodes, materials, animations } = useGLTF("/building.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions['Action.008'].play()
  }, [actions])

  useFrame((state) => {

    console.log(actions["Action.008"].getClip().duration * scroll.offset)

    // // if (actions["Action.008"].getClip().duration * scroll.offset === 0) {
      
    state.camera.rotation.x = cameraRef.current.rotation.x 
    
      state.camera.rotation.x = cameraRef.current.rotation.x 
      state.camera.rotation.y = - cameraRef.current.rotation.y
      state.camera.rotation.z = cameraRef.current.rotation.z
    // }

    state.camera.position.x = cameraRef.current.position.x
    state.camera.position.y = cameraRef.current.position.y
    state.camera.position.z = cameraRef.current.position.z

    // state.camera.lookAt(trackingCameraRef.current.position.x, trackingCameraRef.current.position.y, trackingCameraRef.current.position.z)

    actions["Action.008"].time = THREE.MathUtils.lerp(
      actions["Action.008"].time,
      actions["Action.008"].getClip().duration * scroll.offset,
      0.05
    )
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Camera_curve"
          position={[-0.16, -1.25, 0.14]}
          rotation={[0, 0.51, 0]}
        />
        <group
          ref={trackingCameraRef}
          name="Curve_tracking_camera"
          position={[-2.35, -1.35, -0.75]}
          scale={2.42}
        />
        <mesh
          ref={cameraRef}
          name="CameraHelperCube"
          castShadow
          receiveShadow
          geometry={nodes.CameraHelperCube.geometry}
          material={nodes.CameraHelperCube.material}
          position={[7.7, 3.88, 9.31]}
          rotation={[0, -0.25, 0]}
          scale={0.09}
        />
        <mesh
          name="First_room"
          castShadow
          receiveShadow
          geometry={nodes.First_room.geometry}
          material={nodes.First_room.material}
          position={[8.18, 3.94, 9.17]}
          scale={0.19}
        />
        <mesh
          name="Handrail"
          castShadow
          receiveShadow
          geometry={nodes.Handrail.geometry}
          material={nodes.Handrail.material}
          position={[-6.39, -6.46, -4.32]}
          rotation={[Math.PI, -0.15, Math.PI]}
          scale={0.19}
        />
        <mesh
          name="Highlighting_cases"
          castShadow
          receiveShadow
          geometry={nodes.Highlighting_cases.geometry}
          material={nodes.Highlighting_cases.material}
          position={[-4.41, -4.83, -4.53]}
          rotation={[0, 0.51, 0]}
          scale={0.4}
        />
        <mesh
          name="Last_room"
          castShadow
          receiveShadow
          geometry={nodes.Last_room.geometry}
          material={nodes.Last_room.material}
          position={[-7.1, -5.98, -4.28]}
          rotation={[0, -1.42, 0]}
          scale={[0.19, 0.19, 0.31]}
        />
        <mesh
          name="Object_case"
          castShadow
          receiveShadow
          geometry={nodes.Object_case.geometry}
          material={nodes.Object_case.material}
          position={[-4.28, -6.06, -4.46]}
          rotation={[0, 0.51, 0]}
          scale={0.36}
        />
        <mesh
          name="Object_what_we_do"
          castShadow
          receiveShadow
          geometry={nodes.Object_what_we_do.geometry}
          material={nodes.Object_what_we_do.material}
          position={[3.69, 3.86, 9.19]}
          scale={0.39}
        />
        <mesh
          name="Object_worldwide"
          castShadow
          receiveShadow
          geometry={nodes.Object_worldwide.geometry}
          material={materials["Material.006"]}
          position={[2.24, 3.99, 4.28]}
          rotation={[0, 0.51, 0]}
          scale={[0.34, 0.31, 0.12]}
        />
        <mesh
          name="Rack"
          castShadow
          receiveShadow
          geometry={nodes.Rack.geometry}
          material={nodes.Rack.material}
          position={[3.65, 3.33, 9.2]}
          scale={[0.34, 0.14, 0.34]}
        />
        <mesh
          name="Room_cases"
          castShadow
          receiveShadow
          geometry={nodes.Room_cases.geometry}
          material={nodes.Room_cases.material}
          position={[-3.06, -5.99, -4.47]}
          rotation={[-Math.PI, 1.06, -Math.PI]}
          scale={0.19}
        />
        <mesh
          name="Second_door1"
          castShadow
          receiveShadow
          geometry={nodes.Second_door1.geometry}
          material={nodes.Second_door1.material}
          position={[-7.15, -4.98, -4.11]}
          rotation={[0, 0.14, Math.PI]}
          scale={[-1.24, -1, -0.03]}
        />
        <mesh
          name="Second_door2"
          castShadow
          receiveShadow
          geometry={nodes.Second_door2.geometry}
          material={nodes.Second_door2.material}
          position={[-7.15, -6.95, -4.11]}
          rotation={[0, 0.14, Math.PI]}
          scale={[-1.24, -1, -0.03]}
        />
        <mesh
          name="Second_room"
          castShadow
          receiveShadow
          geometry={nodes.Second_room.geometry}
          material={materials["Material.002"]}
          position={[3.76, 5.23, 8.76]}
          scale={0.19}
        />
        <mesh
          name="Ship_skin"
          castShadow
          receiveShadow
          geometry={nodes.Ship_skin.geometry}
          material={nodes.Ship_skin.material}
          position={[-8.07, -5.97, -8.99]}
          rotation={[0, 0.41, 0]}
          scale={[4.23, 1, 2.06]}
        />
        <mesh
          name="Stand_cases"
          castShadow
          receiveShadow
          geometry={nodes.Stand_cases.geometry}
          material={nodes.Stand_cases.material}
          position={[-4.27, -6.72, -4.45]}
          rotation={[0, 0.51, 0]}
          scale={[0.44, 0.05, 0.44]}
        />
        <mesh
          name="Text_image_20_ear_business"
          castShadow
          receiveShadow
          geometry={nodes.Text_image_20_ear_business.geometry}
          material={nodes.Text_image_20_ear_business.material}
          position={[1.76, 4.22, 6.22]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.43}
        />
        <mesh
          name="Text_Image_400_emploees"
          castShadow
          receiveShadow
          geometry={nodes.Text_Image_400_emploees.geometry}
          material={nodes.Text_Image_400_emploees.material}
          position={[-6.91, -6.38, -4.38]}
          rotation={[-0.05, -1.42, 1.52]}
          scale={[0.25, 0.22, 0.46]}
        />
        <mesh
          name="Text_image_MORE_THAN_50_000_000"
          castShadow
          receiveShadow
          geometry={nodes.Text_image_MORE_THAN_50_000_000.geometry}
          material={nodes.Text_image_MORE_THAN_50_000_000.material}
          position={[-11.71, -5.77, -4.7]}
          rotation={[-3.13, -0.49, -1.57]}
          scale={[0.18, 0.16, 0.34]}
        />
        <mesh
          name="Tube"
          castShadow
          receiveShadow
          geometry={nodes.Tube.geometry}
          material={materials["Material.010"]}
          position={[-0.09, 1.45, -0.05]}
          rotation={[0, 0.51, 0]}
          scale={[3.07, 5.32, 3.07]}
        />
        <mesh
          name="Debugging_element(for_text)"
          castShadow
          receiveShadow
          geometry={nodes["Debugging_element(for_text)"].geometry}
          material={materials["Material.012"]}
          position={[-2.39, -3.59, 1.05]}
          rotation={[0, 0.51, 0]}
          scale={0.02}
        />
        <mesh
          name="Corridor_into_the_pipe"
          castShadow
          receiveShadow
          geometry={nodes.Corridor_into_the_pipe.geometry}
          material={materials["Material.007"]}
          position={[2.55, 3.94, 4.65]}
          rotation={[-Math.PI, 1.06, -Math.PI]}
          scale={0.19}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[6.21, 4.97, 9.16]}
          scale={[0.04, 1, 1]}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[6.21, 2.99, 9.16]}
          scale={[0.04, 1, 1]}
        />
        <mesh
          name="1000+_apps"
          castShadow
          receiveShadow
          geometry={nodes["1000+_apps"].geometry}
          material={nodes["1000+_apps"].material}
          position={[-0.09, -4.23, -0.05]}
          scale={1.29}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/building.glb");