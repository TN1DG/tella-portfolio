"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface GroundProps {
  position?: [number, number, number];
  size?: [number, number];
  color?: string;
  opacity?: number;
}

export default function Ground({
  position = [0, -2, 0],
  size = [20, 20],
  color = "#070b12",
  opacity = 0.5,
}: GroundProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Subtle material animation
      if (meshRef.current.material && 'emissiveIntensity' in meshRef.current.material) {
        (meshRef.current.material as any).emissiveIntensity = 0.1 + Math.sin(time * 0.5) * 0.05;
      }
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={position} 
      rotation={[-Math.PI / 2, 0, 0]} 
      receiveShadow
    >
      <planeGeometry args={size} />
      <meshStandardMaterial 
        color={color}
        transparent
        opacity={opacity}
        metalness={0.8}
        roughness={0.2}
        emissive="#001122"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}
