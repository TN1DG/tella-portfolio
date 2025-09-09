"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface FloatingCubeProps {
  position?: [number, number, number];
  scale?: number;
  color?: string;
  wireframe?: boolean;
}

export default function FloatingCube({
  position = [0, 0, 0],
  scale = 1,
  color = "#00ffff",
  wireframe = false,
}: FloatingCubeProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Rotate the cube
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.5;
      
      // Float up and down
      meshRef.current.position.y = position[1] + Math.sin(time * 2) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color} 
        wireframe={wireframe}
        metalness={0.7}
        roughness={0.3}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}
