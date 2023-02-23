import { useRef, useState } from "react";
import useBus from "use-bus";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

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
import { RoomTour } from "./scenes/RoomTour/RoomTour";

export const App = () => {
  const [isWhatWeDoModalOpen, setWhatWeDoModalOpen] = useState(false);

  useBus("WHAT_WE_DO_OPEN", () => setWhatWeDoModalOpen(true));
  useBus("WHAT_WE_DO_CLOSE", () => setWhatWeDoModalOpen(false));

  return (
    <ReactLenis root>
      <RoomTour />

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