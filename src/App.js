import "./App.css";
import React, { Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Scene, AmbientLight } from "three";

function Model(props) {
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf"
  );

  return <primitive object={scene} {...props} />;
}

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={0.9} />
          <Model position={[0, 0, 0]} />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
