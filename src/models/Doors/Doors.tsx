import * as THREE from 'three'
import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { DoorsTypes, GLTFAction, GLTFResult } from './types'
import { useFrame } from '@react-three/fiber'

export function Doors({ mainAnimationTime = 0, ...props }: DoorsTypes): JSX.Element {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials, animations } = useGLTF('/doors.glb') as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)
  
  const topDoorRef = useRef<THREE.Mesh>(null)
  const bottomDoorRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    if (actions["Dor_01_Low"] && actions["Dor_02_Low"]) {
      // actions["Dor_01_Low"].play().paused = true
      // actions["Dor_02_Low"].play().paused = true
    }
  }, [])
  
  useFrame(() => {
    console.log(mainAnimationTime)

    // if (actions['Dor_01_Low'] && actions['Dor_02_Low']) {
    //   actions["Dor_02_Low"].time =
    //     mainAnimationTime /
    //     actions["Dor_02_Low"].getClip().duration *
    //     actions["Dor_02_Low"].getClip().duration

    //   actions["Dor_01_Low"].time =
    //     mainAnimationTime /
    //     actions["Dor_01_Low"].getClip().duration *
    //     actions["Dor_01_Low"].getClip().duration
    // } 
  })


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          ref={topDoorRef}
          name="Dor_02_Low"
          geometry={nodes.Dor_02_Low.geometry}
          material={materials['Material.044']}
          // position={[-107.18, -31.82, 120.79]}
          position={[6.1, 4, 9.678]}
        />
        <mesh
          ref={bottomDoorRef}
          name="Dor_01_Low"
          geometry={nodes.Dor_01_Low.geometry}
          material={materials['Material.044']}
          // position={[-107.18, -31.82, 121.01]}
          position={[6.1, 4, 9.678]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/doors.glb')
