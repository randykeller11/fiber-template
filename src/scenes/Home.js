import React, { Suspense } from "react";
import { Sky, useProgress, Html } from "@react-three/drei";

import Avatar5 from "../components/Avatar5";
import Office from "../components/Office";
import Blm from "../components/Blm";
import Mural4 from "../components/Mural4";
import Mural5 from "../components/Mural5";
import Mural6 from "../components/Mural6";
import Mural8 from "../components/Mural8";
import Mural9 from "../components/Mural9";

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
        position={[-6.2, 7, -52.5]}
        scale={[4.9, 3.5, 3]}
        rotation={[0, -3.17, 0]}
      />
      <Mural5
        position={[13.2, 9.1, 30]}
        scale={[2.4, 2.6, 1]}
        rotation={[0, -3.15, 0]}
      />
      <Mural6
        position={[-18.9, 0.1, 24]}
        scale={[2, 1.92, 2]}
        rotation={[0, 1.6, 0]}
      />
      <Mural8
        position={[8.37, 3, 17.75]}
        scale={[3.15, 2.2, 2]}
        rotation={[0, -1.17, -0.02]}
      />
      <Mural9
        position={[14.89, 0.2, -43.65]}
        scale={[0.55, 0.55, 0.5]}
        rotation={[0, -0.1, 0]}
      />
      <Avatar5 />
      <Office position={[-20, 0, 30]} scale={[2.5, 2.5, 2.5]} />
    </Suspense>
  );
}

export default Home;
