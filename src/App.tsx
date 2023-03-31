import { DevelopingTheFuture } from './sections/DevelopingTheFuture/DevelopingTheFuture'
import { WhatWeDo } from './sections/WhatWeDo/WhatWeDo'
import { DevelopmentsLabs } from './sections/DevelopmentsLabs/DevelopmentsLabs'
import { Industries } from './sections/Industries/Industries'
import { IndustriesList } from './sections/IndustriesList/IndustriesList'
import { OurClients } from './sections/OurClients/OurClients'
import { MoreApps } from './sections/MoreApps/MoreApps'
import { Cases } from './sections/Cases/Cases'
import { CasesShowcase } from './sections/CasesShowcase/CasesShowcase'
import { Help } from './sections/Help/Help'

import { Suspense } from 'react'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ReactLenis } from '@studio-freight/react-lenis'
import { Building } from './models/Building/Building'
import { Header } from './components/Header/Header'
import './styles/App.scss'

function App() {
  return (
    <ReactLenis root>
      <Canvas
        camera={{ zoom: 1.7, fov: 75 }}
        style={{ top: 0, zIndex: -1, position: "fixed" }}
      >
        <Suspense fallback={null}>
          <pointLight position={[3, 5.5, 9]} intensity={1} />
          <pointLight position={[10, 4.5, 4.2]} intensity={0.4} />
          <directionalLight position={[3, 5.5, 9]} color="white" />
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
        <DevelopingTheFuture />
        <WhatWeDo />
        <DevelopmentsLabs />
        <Industries />
        <IndustriesList />
        <OurClients />
        <MoreApps />
        <Cases />
        <CasesShowcase />
        <Help />
      </main>
    </ReactLenis>
  )
}

export default App
