"use client";

import { Suspense, ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import Lights from "./Lights";
import CameraRig from "./CameraRig";

interface LoaderProps {}

function Loader({}: LoaderProps) {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="w-32 h-32 relative">
          {/* Animated loader ring */}
          <div className="absolute inset-0 border-4 border-neon-cyan/20 rounded-full"></div>
          <div 
            className="absolute inset-0 border-4 border-transparent border-t-neon-cyan rounded-full animate-spin"
            style={{
              background: `conic-gradient(from 0deg, transparent, rgba(0, 255, 255, 0.8), transparent)`,
              WebkitMask: 'radial-gradient(circle, transparent 50%, black 50%)',
              mask: 'radial-gradient(circle, transparent 50%, black 50%)',
            }}
          ></div>
          
          {/* Progress text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-tech text-neon-cyan text-sm font-medium">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
        
        <div className="text-center">
          <p className="font-tech text-white/80 text-sm tracking-wider">
            LOADING EXPERIENCE
          </p>
          <div className="mt-2 flex space-x-1">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-neon-pink rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </Html>
  );
}

interface SceneWrapperProps {
  children?: ReactNode;
  className?: string;
  dpr?: [number, number];
  camera?: {
    fov?: number;
    position?: [number, number, number];
    near?: number;
    far?: number;
  };
  enableCameraRig?: boolean;
  enableLights?: boolean;
  backgroundColor?: string;
}

export default function SceneWrapper({
  children,
  className = "",
  dpr = [1, 2],
  camera = {
    fov: 45,
    position: [0, 2, 8],
    near: 0.1,
    far: 1000,
  },
  enableCameraRig = true,
  enableLights = true,
  backgroundColor = "#070b12",
}: SceneWrapperProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        dpr={dpr}
        camera={camera}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        shadows
        performance={{
          min: 0.5,
        }}
        onCreated={(state) => {
          // Set tone mapping for better visuals
          state.gl.toneMapping = 1; // ACESFilmicToneMapping
          state.gl.toneMappingExposure = 1;
          
          // Enable shadow maps
          state.gl.shadowMap.enabled = true;
          state.gl.shadowMap.type = 2; // PCFSoftShadowMap
          
          // Set background color
          state.scene.background = null;
        }}
      >
        {/* Background color */}
        <color attach="background" args={[backgroundColor]} />
        
        {/* Fog for depth */}
        <fog attach="fog" args={[backgroundColor, 10, 50]} />
        
        <Suspense fallback={<Loader />}>
          {/* Lighting setup */}
          {enableLights && <Lights />}
          
          {/* Camera controls */}
          {enableCameraRig && <CameraRig />}
          
          {/* Scene content */}
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
