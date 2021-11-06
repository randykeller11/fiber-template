import "./App.css";
import React, { Suspense } from "react";
import { Sky } from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";
import Avatar5 from "./components/Avatar5";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 4, -6] }}>
          <ambientLight intensity={0.9} />
          <Sky />

          <Avatar5 />
          <mesh position={[0, 0, 0]} rotation={[-1.55, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[20, 20]} />
            <meshPhongMaterial attach="material" color="darkgreen" />
          </mesh>
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
