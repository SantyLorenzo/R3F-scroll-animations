import { useGesture } from "@use-gesture/react"
import { useSpring, a } from "@react-spring/three"

export const DraggableMesh = (props: JSX.IntrinsicElements["mesh"]) => {
    const [spring, set] = useSpring(() => ({ rotation: [0, 0, 0] }))

    const drag = useGesture({
      onDrag: ({ offset: [x, y] }) => set({ rotation: [0, x * 0.005, - y * 0.005] }),
    })

    return (
        // @ts-ignore
        <a.mesh
            {...spring}
            {...drag()}
            {...props}
        />
    )   
}