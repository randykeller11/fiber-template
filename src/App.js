import "./App.css";
import React, { Suspense } from "react";
import { Sky, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Avatar from "./components/Avatar4";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.9} />
          <Sky />
          <Avatar />
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
