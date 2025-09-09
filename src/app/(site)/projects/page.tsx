"use client";

import SceneWrapper from "@/components/three/SceneWrapper";
import PageHero from "@/components/three/overlays/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { projects } from "@/data/profile";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Three.js Scene Background */}
      <SceneWrapper 
        className="fixed inset-0 -z-10"
        camera={{ fov: 45, position: [0, 2, 8] }}
        backgroundColor="#070b12"
      >
        {/* TODO: Add ProjectsScene component here */}
        {/* <ProjectsScene /> */}
      </SceneWrapper>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <PageHero
          title="Projects"
          subtitle="MY CREATIVE WORK"
          description="Explore a collection of projects that showcase my technical skills, creativity, and problem-solving abilities."
          showButtons={false}
        />
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <GlassCard 
                key={index}
                variant={index % 2 === 0 ? "tinted" : "highlighted"} 
                size="lg" 
                glow="medium"
                className="h-full"
              >
                {/* Project Header */}
                <div className="mb-6">
                  <h3 className="font-tech text-2xl text-neon-cyan mb-3 tracking-wider">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="font-tech text-sm text-neon-purple mb-3 tracking-wider uppercase">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-tech tracking-wider bg-neon-cyan/20 border border-neon-cyan/30 rounded-full text-neon-cyan"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Goals */}
                <div className="mb-6">
                  <h4 className="font-tech text-sm text-neon-pink mb-3 tracking-wider uppercase">
                    Key Goals
                  </h4>
                  <div className="space-y-2">
                    {project.goals.map((goal, goalIndex) => (
                      <div key={goalIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-neon-pink mt-2 flex-shrink-0" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {goal}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Features */}
                {project.features && (
                  <div className="mb-6">
                    <h4 className="font-tech text-sm text-neon-purple mb-3 tracking-wider uppercase">
                      Features
                    </h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-neon-purple mt-2 flex-shrink-0" />
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.liveLink && (
                    <GlowButton 
                      variant="default" 
                      size="sm"
                      onClick={() => window.open(project.liveLink, '_blank')}
                    >
                      Live Demo
                    </GlowButton>
                  )}
                  {project.githubLink && (
                    <GlowButton 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.githubLink, '_blank')}
                    >
                      View Code
                    </GlowButton>
                  )}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Project Categories */}
          <GlassCard variant="frosted" size="lg" glow="subtle">
            <h3 className="font-tech text-2xl text-neon-cyan mb-6 tracking-wider text-center">
              PROJECT CATEGORIES
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* TODO: Add project category breakdown */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center">
                  <span className="text-2xl">🌐</span>
                </div>
                <h4 className="font-tech text-neon-cyan mb-2">Web Applications</h4>
                <p className="text-gray-400 text-sm">Full-stack web applications with modern frameworks and technologies.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-tech text-neon-purple mb-2">UI/UX Design</h4>
                <p className="text-gray-400 text-sm">User-centered design projects focusing on intuitive interfaces.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-pink/20 border border-neon-pink/30 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="font-tech text-neon-pink mb-2">Performance</h4>
                <p className="text-gray-400 text-sm">Optimization and performance-focused development projects.</p>
              </div>
            </div>
          </GlassCard>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="font-display text-3xl md:text-4xl text-glow-cyan mb-4">
              Interested in Collaboration?
            </h3>
            <p className="font-body text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to contribute to your vision.
            </p>
            <GlowButton variant="secondary" size="lg" glow="intense">
              Let's Work Together
            </GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
}
