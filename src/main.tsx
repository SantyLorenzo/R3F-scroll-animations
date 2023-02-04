import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { Canvas} from "@react-three/fiber";
import {
  Sky,
  Stars,
  Scroll,
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
        <ScrollControls pages={5}>
          <Building />
          <Scroll html className="scroll">
            <h1 className="title-1">Camera animation based on scroll  WIP</h1>
            <h1 className="title-2">scroll up</h1>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  </React.StrictMode>
);
