"use client";

import SceneWrapper from "@/components/three/SceneWrapper";
import PageHero from "@/components/three/overlays/PageHero";
import FloatingCube from "@/components/three/objects/FloatingCube";
import Ground from "@/components/three/objects/Ground";

export default function Home() {
  const handleViewProjects = () => {
    // Navigate to projects section or page
    console.log('Navigating to projects...');
  };

  const handleGetInTouch = () => {
    // Navigate to contact section or page
    console.log('Navigating to contact...');
  };

  return (
    <div className="min-h-screen relative">
      {/* Three.js Scene */}
      <SceneWrapper 
        className="absolute inset-0"
        camera={{ fov: 45, position: [0, 2, 8] }}
        backgroundColor="#070b12"
      >
        {/* Ground plane */}
        <Ground position={[0, -2, 0]} size={[20, 20]} />
        
        {/* Floating demonstration cubes */}
        <FloatingCube 
          position={[-3, 1, -2]} 
          scale={0.8} 
          color="#00ffff" 
          wireframe={false}
        />
        <FloatingCube 
          position={[3, -1, -1]} 
          scale={0.6} 
          color="#9333ea" 
          wireframe={true}
        />
        <FloatingCube 
          position={[0, 2, -3]} 
          scale={0.4} 
          color="#ec4899" 
          wireframe={false}
        />
      </SceneWrapper>
      
      {/* Hero Overlay */}
      <PageHero
        title="Tella"
        subtitle="FULL-STACK DEVELOPER"
        description="Crafting digital experiences with modern technologies. Specializing in React, TypeScript, and innovative web solutions."
        onPrimaryAction={handleViewProjects}
        onSecondaryAction={handleGetInTouch}
        primaryButtonText="VIEW PROJECTS"
        secondaryButtonText="GET IN TOUCH"
      />
    </div>
  );
}
