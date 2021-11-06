import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { Vector3 } from "three";
import useSceneStore from "./stores/useSceneStore";

function CameraControls(props) {
  const controlsRef = useRef();

  let moveForward = false;
  let moveBackward = false;
  let moveLeft = false;
  let moveRight = false;
  let prevTime = 0;
  const velocity = new Vector3();
  const direction = new Vector3();
  const onKeyDown = function (event) {
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        moveForward = true;
        break;

      case "ArrowLeft":
      case "KeyA":
        moveLeft = true;
        break;

      case "ArrowDown":
      case "KeyS":
        moveBackward = true;
        break;

      case "ArrowRight":
      case "KeyD":
        moveRight = true;
        break;

      default:
        break;
    }
  };
  const onKeyUp = function (event) {
    switch (event.code) {
      case "ArrowUp":
      case "KeyW":
        moveForward = false;
        break;
      case "ArrowLeft":
      case "KeyA":
        moveLeft = false;
        break;
      case "ArrowDown":
      case "KeyS":
        moveBackward = false;
        break;
      case "ArrowRight":
      case "KeyD":
        moveRight = false;
        break;
      default:
        break;
    }
  };

  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);

  let sceneStore = useSceneStore();

  useFrame(({ clock }) => {
    // Getting the delta time to change location of camera.
    const elapsedTime = clock.getElapsedTime();
    const delta = elapsedTime - prevTime;
    prevTime = elapsedTime;

    // Reducing speed of camera with frames to give more realistic motion effect.
    velocity.x -= velocity.x * delta * 3.5;
    velocity.z -= velocity.z * delta * 3.5;
    velocity.y -= 9.8 * 100 * delta; // 100.0 = mass

    // Change direction based on the keys pressed by user
    direction.z = Number(moveForward) - Number(moveBackward);
    direction.x = Number(moveRight) - Number(moveLeft);
    direction.normalize();

    // Movement controls for FPS specified in Three.js Docs.
    if (moveForward || moveBackward) velocity.z -= direction.z * 50 * delta;
    if (moveLeft || moveRight) velocity.x -= direction.x * 50 * delta;
    controlsRef.current.moveRight(-velocity.x * delta);
    controlsRef.current.moveForward(-velocity.z * delta);

    if (sceneStore.currentScene === 4) {
      // Teleporting user back to middle of plane of goes out of boundary.
      if (
        controlsRef.current.getObject().position.x > 10 ||
        controlsRef.current.getObject().position.z > 8 ||
        controlsRef.current.getObject().position.x < -3 ||
        controlsRef.current.getObject().position.z < -8
      ) {
        controlsRef.current.getObject().position.x = 2;
        controlsRef.current.getObject().position.z = -1;
      }
    }
  });
  return (
    <PointerLockControls
      ref={controlsRef}
      selector="#selector"
      isLocked={true}
    />
  );
}

export default CameraControls;
