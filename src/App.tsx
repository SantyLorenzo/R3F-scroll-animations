import { Suspense, useState } from "react";
import useBus from "use-bus";
import { Canvas } from "@react-three/fiber"
import { ReactLenis } from "@studio-freight/react-lenis";
import { Environment, Sky, Stars, Loader } from "@react-three/drei"
import { Building } from "./models"

import { About } from "./sections/about/About";
import { Cases } from "./sections/cases/Cases";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Contacts } from "./sections/contacts/Contacts";
import { WhatWeDo } from "./sections/what-we-do/WhatWeDo";
import { Verticals } from "./sections/verticals/Verticals";
import { OurClients } from "./sections/our-clients/ourClients";
import { ModalWhatWeDo } from "./components/Modal/ModalWhatWeDo";
import { WorldwideCompany } from "./sections/worldwide-company/WorldwideCompany";


export const App = () => {
  const [isWhatWeDoModalOpen, setWhatWeDoModalOpen] = useState(false);

  useBus("WHAT_WE_DO_OPEN", () => setWhatWeDoModalOpen(true));
  useBus("WHAT_WE_DO_CLOSE", () => setWhatWeDoModalOpen(false));

  return (
    <ReactLenis root options={{ duration: 1 }}>
      <Canvas
        camera={{ zoom: 1.8 }}
        style={{
            top: 0,
            zIndex: -1,
            position: 'fixed',
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

      <Loader />


      <Header />
      <main>
        <About />
        <WhatWeDo /> 
        <WorldwideCompany />
        <Verticals />
        <OurClients />
        <Cases />
        <Contacts />
      </main>
      <Footer />
      <ModalWhatWeDo isOpen={isWhatWeDoModalOpen} />
    </ReactLenis>
  );
};