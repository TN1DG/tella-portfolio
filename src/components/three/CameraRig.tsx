"use client";

import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import * as THREE from "three";

interface CameraRigProps {
  enableMouseParallax?: boolean;
  enableAutoRotate?: boolean;
  parallaxIntensity?: number;
  lerpFactor?: number;
  autoRotateSpeed?: number;
}

export default function CameraRig({
  enableMouseParallax = true,
  enableAutoRotate = false,
  parallaxIntensity = 0.5,
  lerpFactor = 0.03,
  autoRotateSpeed = 0.5,
}: CameraRigProps) {
  const { camera, viewport, pointer } = useThree();
  const targetPosition = useRef(new Vector3());
  const targetLookAt = useRef(new Vector3(0, 0, 0));
  const originalPosition = useRef(new Vector3());
  const time = useRef(0);
  
  // Store the original camera position
  useEffect(() => {
    originalPosition.current.copy(camera.position);
    targetPosition.current.copy(camera.position);
  }, [camera]);

  useFrame((state, delta) => {
    time.current += delta;
    
    if (enableMouseParallax) {
      // Calculate mouse-based offset
      const mouseX = (pointer.x * viewport.width) / 2;
      const mouseY = (pointer.y * viewport.height) / 2;
      
      // Apply parallax effect to target position
      targetPosition.current.x = originalPosition.current.x + mouseX * parallaxIntensity;
      targetPosition.current.y = originalPosition.current.y + mouseY * parallaxIntensity * 0.5;
      
      // Subtle look-at offset based on mouse position
      targetLookAt.current.x = mouseX * 0.1;
      targetLookAt.current.y = mouseY * 0.05;
    }
    
    if (enableAutoRotate) {
      // Auto-rotate around Y axis
      const radius = originalPosition.current.length();
      const angle = time.current * autoRotateSpeed;
      
      targetPosition.current.x = Math.sin(angle) * radius;
      targetPosition.current.z = Math.cos(angle) * radius;
    }
    
    // Smooth camera movement using lerp
    camera.position.lerp(targetPosition.current, lerpFactor);
    
    // Smooth look-at with subtle offset
    const lookAtTarget = new Vector3(
      targetLookAt.current.x,
      targetLookAt.current.y,
      targetLookAt.current.z
    );
    
    // Create a smooth look-at behavior
    const currentLookAt = new Vector3();
    camera.getWorldDirection(currentLookAt);
    currentLookAt.multiplyScalar(-1).add(camera.position);
    
    currentLookAt.lerp(lookAtTarget, lerpFactor * 0.5);
    camera.lookAt(currentLookAt);
    
    // Add subtle floating motion when not using mouse parallax
    if (!enableMouseParallax) {
      const floatY = Math.sin(time.current * 0.8) * 0.2;
      const floatX = Math.cos(time.current * 0.6) * 0.1;
      
      camera.position.y = originalPosition.current.y + floatY;
      camera.position.x = originalPosition.current.x + floatX;
    }
  });

  return null;
}
