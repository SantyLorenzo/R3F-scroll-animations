import { useScroll, Box } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export const Cube = (props) => {
  const ref = useRef()
  const scroll = useScroll()

  const offset = scroll.offset

  const [initialPosition] = useState(props.position)

  console.log(scroll.offset)
  

  useFrame((state) => {
    // data.offset = current scroll position, between 0 and 1, dampened
    // data.delta = current delta, between 0 and 1, dampened

    console.log(scroll.offset)

    ref.current.position.z = - initialPosition[2] * scroll.offset * 0.1;
    ref.current.position.x = - initialPosition[0] * scroll.offset * 0.1;
    // ref.current.position.y = -initialPosition[2] * scroll.offset * 3;

    // state.camera.position.set(Math.sin(Math.PI / 2), 0, 0)
    // state.camera.lookAt(0, 0, 0)
    if (offset === 1) {
      state.camera.lookAt(3, 3, 0)

    }
    
    // ref.current.rotation.z = Math.PI * scroll.offset;
  })

  return <Box ref={ref} {...props} />
}