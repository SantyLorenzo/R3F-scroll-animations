import './App.css';
import { Canvas} from '@react-three/fiber';
import { Building } from './models/building';
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';

function App() {
  return (
    <Canvas
      style={{
        width: '100vw',
        height: '100vh'
      }}
      camera={{
        zoom: 1,
        fov: 50,
      }}
    >
      <Environment preset="city" />

      <ScrollControls pages={3}>
        <Building />

        <OrbitControls enableZoom={false} />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
