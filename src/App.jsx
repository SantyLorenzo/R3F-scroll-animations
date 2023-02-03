import './App.css';
import { Canvas} from '@react-three/fiber';
import { Building } from './models';
import { Environment, Scroll, ScrollControls, Sky, Stars } from '@react-three/drei';

function App() {
  return (
    <Canvas>  
      <Environment preset="city" />
      <Sky sunPosition={[0, 0, 0]} />
      <Stars radius={100} depth={0} count={5000} factor={4} saturation={0} speed={0.1} />

      <ScrollControls pages={5}>
        <Building />

        <Scroll html className='scroll'>
          <h1 className='title-1'>Room Tour WIP</h1>
          <h1 className='title-2'>scroll up</h1>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
}

export default App;
