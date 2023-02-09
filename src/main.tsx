import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas} from "@react-three/fiber";
import {
  Sky,
  Stars,
  Environment,
  ScrollControls,
} from "@react-three/drei";
import { Building } from "./models";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <Canvas>
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

        <ScrollControls pages={10} damping={0.5}>
          <Building />
        </ScrollControls>
      </Canvas>
    </div>
  </React.StrictMode>
);