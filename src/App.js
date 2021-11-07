import "./App.css";
import React, { Suspense } from "react";
import { Sky } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import Avatar5 from "./components/Avatar5";
import Office from "./components/Office";
import Basquiat from "./components/Basquiat";
import Mural from "./components/Mural";
import Blm from "./components/Blm";
function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 4, -6] }}>
          <ambientLight intensity={0.9} />
          <Sky
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
            distance={450000}
          />
          <Blm
            position={[13, -0.35, -48.9]}
            scale={[2.8, 2.5, 2.6]}
            rotation={[0, 0.55, 0]}
          />

          <Avatar5 />
          <Office position={[-20, 0, 30]} scale={[2.5, 2.5, 2.5]} />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
