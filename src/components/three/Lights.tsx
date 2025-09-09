"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Lights() {
  const directionalLightRef = useRef<THREE.DirectionalLight>(null);
  const spotLightRef = useRef<THREE.SpotLight>(null);
  const pointLightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Subtle animation for the spot light
    if (spotLightRef.current) {
      spotLightRef.current.position.x = Math.sin(time * 0.5) * 3;
      spotLightRef.current.position.z = Math.cos(time * 0.5) * 3;
    }
    
    // Gentle pulsing for the point light intensity
    if (pointLightRef.current) {
      pointLightRef.current.intensity = 0.3 + Math.sin(time * 2) * 0.1;
    }
  });

  return (
    <>
      {/* Ambient light for overall scene illumination */}
      <ambientLight intensity={0.2} color="#4a90e2" />
      
      {/* Main directional light (acts like sun) */}
      <directionalLight
        ref={directionalLightRef}
        position={[10, 10, 5]}
        intensity={0.8}
        color="#ffffff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0005}
      />
      
      {/* Accent point light with neon cyan color */}
      <pointLight
        ref={pointLightRef}
        position={[-5, 5, -5]}
        intensity={0.4}
        color="#00ffff"
        distance={20}
        decay={2}
      />
      
      {/* Subtle spot light for dramatic effect */}
      <spotLight
        ref={spotLightRef}
        position={[5, 8, 5]}
        intensity={0.6}
        angle={Math.PI / 6}
        penumbra={0.5}
        color="#9333ea"
        distance={30}
        decay={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={1}
        shadow-camera-far={30}
        shadow-bias={-0.0001}
      />
      
      {/* Additional fill light from below for softer shadows */}
      <pointLight
        position={[0, -2, 0]}
        intensity={0.15}
        color="#ec4899"
        distance={15}
        decay={1}
      />
      
      {/* Rim lighting effect */}
      <directionalLight
        position={[-10, 5, -10]}
        intensity={0.3}
        color="#00ffff"
      />
      
      {/* Helper to visualize lights in development */}
      {process.env.NODE_ENV === 'development' && (
        <>
          {/* Uncomment to show light helpers */}
          {/* <directionalLightHelper args={[directionalLightRef.current]} />
          <spotLightHelper args={[spotLightRef.current]} />
          <pointLightHelper args={[pointLightRef.current, 0.5]} /> */}
        </>
      )}
    </>
  );
}
