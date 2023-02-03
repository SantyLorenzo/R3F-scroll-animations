import './App.css';
import { Canvas} from '@react-three/fiber';
import { Building } from './models/building';
import { Environment, OrbitControls, Scroll, ScrollControls } from '@react-three/drei';

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

        <Scroll html style={{ width: '100%' }}>
          <h1 
            style={{
              top: '10vh',
              left: '10vw',
              fontSize: '4em',
              position: 'absolute',
            }}
          >
            scroll down
          </h1>

          <h1 
            style={{
              top: '280vh',
              left: '10vw',
              fontSize: '4em',
              position: 'absolute',
            }}
          >
            scroll up
          </h1>

        </Scroll>

        <OrbitControls enableZoom={false} />
      </ScrollControls>
    </Canvas>
  );
}

export default App;
