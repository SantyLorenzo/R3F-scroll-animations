import { Environment, Sky, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Building } from "../../models/Building/Building"

export const RoomTour = () => {
    return (
        <Canvas
            camera={{ zoom: 1.8 }}
            style={{
                top: 0,
                zIndex: -1,
                position: 'fixed',
            }}
        >
            <Environment preset="city" />
            <Sky sunPosition={[0, 0, 0]} />
            <Stars
                depth={0}
                factor={4}
                speed={0.1}
                count={5000}
                radius={100}
                saturation={0}
            />
            <Building />
        </Canvas>
    )
}