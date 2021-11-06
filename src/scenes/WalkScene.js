import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import useKeyPress from "../hooks/useKeyPress";

function WalkScene() {
  const modelRef = useRef();

  const wPress = useKeyPress("w");
  const sPress = useKeyPress("s");
  const aPress = useKeyPress("a");
  const dPress = useKeyPress("d");

  useFrame((state, delta) => {
    const moveDistance = 200 * delta; // 200 pixels per second
    const rotateAngle = (Math.PI / 2) * delta; // pi/2 radians (90 degrees) per second
    if (wPress)
      modelRef.current.position.z = modelRef.current.position.z - moveDistance;
    if (sPress)
      modelRef.current.position.z = modelRef.current.position.z + moveDistance;
  });
  return <Model ref={modelRef} />;
}

export default WalkScene;
