import { Environment, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  DotScreen,
  EffectComposer,
  Glitch,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { ReactLenis } from "@studio-freight/react-lenis";
import { GlitchMode } from "postprocessing";
import { Suspense } from "react";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Loader } from "./components/Loader";
import { ModalWhatWeDo } from "./components/Modal/ModalWhatWeDo";
import { Building } from "./models/Building/Building";
import { About } from "./sections/about/About";
import { Cases } from "./sections/cases/Cases";
import { Contacts } from "./sections/contacts/Contacts";
import { OurClients } from "./sections/our-clients/ourClients";
import { Verticals } from "./sections/verticals/Verticals";
import { WhatWeDo } from "./sections/what-we-do/WhatWeDo";
import { WhatWeDoAreas } from "./sections/what-we-do-areas/WhatWeDoAreas";

export const App = () => {
  return (
    <>
      <ReactLenis
        root
        options={{
          duration: 5,
        }}
      >
        <Canvas
          camera={{ zoom: 1.3 }}
          style={{
            top: 0,
            zIndex: -1,
            position: "fixed",
          }}
        >
          <Suspense fallback={null}>
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
          </Suspense>

          <EffectComposer>
            {/* <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={480}
            /> */}
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
              opacity={0.5}
            />
            <Noise opacity={0.3} />
            {/* <Glitch
              delay={[1.5, 3.5]} // min and max glitch delay
              duration={[0.6, 1.0]} // min and max glitch duration
              strength={[0.3, 1.0]} // min and max glitch strength
              mode={GlitchMode.SPORADIC} // glitch mode
              active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
              ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
            /> */}
            <ChromaticAberration offset={[0.02, 0.02]} />
            {/* <DotScreen
              // blendFunction={BlendFunction.NORMAL} // blend mode
              angle={Math.PI * 0.5} // angle of the dot pattern
              scale={1.0} // scale of the dot pattern
            /> */}
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
          </EffectComposer>
        </Canvas>

        <Header />
        <main>
          <About />
          <WhatWeDo />
          <WhatWeDoAreas />
          <Verticals />
          <OurClients />
          <Cases />
          <Contacts />
        </main>
        <Footer />
      </ReactLenis>

      <ModalWhatWeDo />
      <Loader />
    </>
  );
};
