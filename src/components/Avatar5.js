/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import useKeyPress from "../hooks/useKeyPress";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/avatar5.glb");
  const { actions } = useAnimations(animations, group);
  const savedPos = useRef({ position: { z: 0, x: 0 }, rotation: { y: 0 } });
  const animation = useRef("walk");

  const wPress = useKeyPress("w");
  const sPress = useKeyPress("s");
  const aPress = useKeyPress("a");
  const dPress = useKeyPress("d");

  useFrame((state, delta) => {
    const moveDistance = 5 * delta; // 200 pixels per second
    const rotateAngle = (Math.PI / 2) * delta; // pi/2 radians (90 degrees) per second

    if (!wPress) {
      animation.current === "walk" && actions["walk"].stop();
      animation.current === "walkBack" && actions["walkBack"].stop();
      actions["walkBack"].stop();

      actions["idle"].play();

      animation.current = "idle";

      group.current.position.z = savedPos.current.position.z;
      group.current.position.x = savedPos.current.position.x;
      //   group.current.rotation.y = savedPos.current.rotation.y;
    }

    if (wPress) {
      animation.current === "walkBack" && actions["walkBack"].stop();
      animation.current === "idle" && actions["idle"].stop();

      actions["walk"].play();
      animation.current = "walk";
      group.current.position.z = savedPos.current.position.z;
      group.current.position.x = savedPos.current.position.x;

      group.current.translateZ(moveDistance);
      savedPos.current.position.z = group.current.position.z;
      savedPos.current.position.x = group.current.position.x;
    }

    if (sPress) {
      // animation.current === "walk" && actions["walk"].stop();
      // animation.current === "idle" && actions["idle"].stop();
      actions["walkBack"].play();
      animation.current = "walkBack";

      group.current.position.z = savedPos.current.position.z;
      group.current.position.x = savedPos.current.position.x;

      group.current.translateZ(-moveDistance);

      savedPos.current.position.z = group.current.position.z;
      savedPos.current.position.x = group.current.position.x;
    }
    if (aPress) {
      group.current.rotation.y = group.current.rotation.y + rotateAngle;
    }
    if (dPress) {
      group.current.rotation.y = group.current.rotation.y - rotateAngle;
    }
    const relativeCameraOffset = new THREE.Vector3(-0.6, 2.1, -4);
    const thirdPersonTarget = new THREE.Vector3(0, 1.7, 5);

    var cameraOffset = relativeCameraOffset.applyMatrix4(
      group.current.matrixWorld
    );
    var targetOffset = thirdPersonTarget.applyMatrix4(
      group.current.matrixWorld
    );

    state.camera.position.x = cameraOffset.x;
    state.camera.position.y = cameraOffset.y;
    state.camera.position.z = cameraOffset.z;
    state.camera.lookAt(targetOffset);
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.EyeLeft.geometry}
        material={nodes.EyeLeft.material}
        skeleton={nodes.EyeLeft.skeleton}
      />
      <skinnedMesh
        geometry={nodes.EyeRight.geometry}
        material={nodes.EyeRight.material}
        skeleton={nodes.EyeRight.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials["Wolf3D_Body.002"]}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials["Wolf3D_Outfit_Bottom.002"]}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials["Wolf3D_Outfit_Footwear.002"]}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials["Wolf3D_Outfit_Top.002"]}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials["Wolf3D_Skin.002"]}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials["Wolf3D_Teeth.002"]}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload("/avatar5.glb");
