import "./App.css";
import React, { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import Home from "./scenes/Home";

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 4, -6] }}>
          <Home />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
