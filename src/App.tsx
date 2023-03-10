import { Environment, Sky, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactLenis } from "@studio-freight/react-lenis";
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
