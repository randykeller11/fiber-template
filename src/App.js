import "./App.css";
import React, { Suspense } from "react";
import { Sky, useProgress, Html } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import Avatar5 from "./components/Avatar5";
import Office from "./components/Office";
import Mural4 from "./components/Mural4";
import Mural5 from "./components/Mural5";
import BirdMural from "./components/BirdMural";

import Blm from "./components/Blm";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 4, -6] }}>
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.9} />
            <Sky
              sunPosition={[0, 1, 0]}
              inclination={0}
              azimuth={0.25}
              distance={450000}
            />
            <Blm
              position={[-19.7, -0.2, -44]}
              scale={[2.4, 2.55, 0.3]}
              rotation={[0, 1.7, 0]}
            />
            <Mural4
              position={[-0.2, 7, -52.5]}
              scale={[4.9, 3.5, 3]}
              rotation={[0, -3.17, 0]}
            />
            <Mural5
              position={[15.6, 5.2, 30]}
              scale={[1.8, 1.6, 1]}
              rotation={[0, -3.15, 0]}
            />
            <BirdMural
              position={[-20, 5.2, 22.3]}
              scale={[1.8, 2, 1]}
              rotation={[0, -1.1, 0]}
            />

            <Avatar5 />
            <Office position={[-20, 0, 30]} scale={[2.5, 2.5, 2.5]} />
          </Suspense>
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
