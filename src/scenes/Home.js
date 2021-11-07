import React, { Suspense } from "react";
import { Sky, useProgress, Html } from "@react-three/drei";

import Avatar5 from "../components/Avatar5";
import Office from "../components/Office";
import Blm from "../components/Blm";
import Mural4 from "../components/Mural4";
import Mural5 from "../components/Mural5";
import BirdMural from "../components/BirdMural";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Home() {
  return (
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
        position={[13.2, 9.1, 30]}
        scale={[2.4, 2.6, 1]}
        rotation={[0, -3.15, 0]}
      />
      <BirdMural
        position={[3.5, 11, 25]}
        scale={[3.8, 4, 2.8]}
        rotation={[0, 0.369, 0]}
      />

      <Avatar5 />
      <Office position={[-20, 0, 30]} scale={[2.5, 2.5, 2.5]} />
    </Suspense>
  );
}

export default Home;
