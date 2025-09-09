"use client";

import SceneWrapper from "@/components/three/SceneWrapper";
import PageHero from "@/components/three/overlays/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { experience } from "@/data/profile";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* Three.js Scene Background */}
      <SceneWrapper 
        className="fixed inset-0 -z-10"
        camera={{ fov: 45, position: [0, 2, 8] }}
        backgroundColor="#070b12"
      >
        {/* TODO: Add ExperienceScene component here */}
        {/* <ExperienceScene /> */}
      </SceneWrapper>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <PageHero
          title="Experience"
          subtitle="MY PROFESSIONAL JOURNEY"
          description="Explore my career progression and the impactful projects I've contributed to across various organizations."
          showButtons={false}
        />
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Timeline Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-glow-cyan mb-4">
              Career Timeline
            </h2>
            <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
              A journey through my professional experiences, highlighting key achievements and growth.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < experience.length - 1 && (
                  <div className="absolute left-6 top-24 w-0.5 h-32 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink opacity-50" />
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-neon-cyan border-2 border-ink-950 shadow-lg shadow-neon-cyan/50" />
                
                {/* Experience Card */}
                <div className="ml-16">
                  <GlassCard 
                    variant={index % 2 === 0 ? "tinted" : "frosted"} 
                    size="lg" 
                    glow="medium"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div>
                        <h3 className="font-tech text-2xl text-neon-cyan mb-2">
                          {exp.role}
                        </h3>
                        <h4 className="font-body text-xl text-white mb-2">
                          {exp.company}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400">
                          <span className="font-tech text-sm">{exp.period}</span>
                          <span className="hidden sm:block">•</span>
                          <span className="font-tech text-sm">{exp.duration}</span>
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      {exp.technologies && (
                        <div className="mt-4 lg:mt-0">
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 text-xs font-tech tracking-wider bg-neon-purple/20 border border-neon-purple/30 rounded-full text-neon-purple"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-neon-pink mt-2 flex-shrink-0" />
                          <p className="text-gray-300 leading-relaxed">
                            {responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-20">
            <GlassCard variant="highlighted" size="lg" glow="intense">
              <h3 className="font-tech text-2xl text-neon-pink mb-6 tracking-wider text-center">
                CORE COMPETENCIES DEVELOPED
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* TODO: Extract and display key skills from experience */}
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center">
                    <span className="text-neon-cyan font-tech text-sm">PM</span>
                  </div>
                  <p className="text-gray-300 text-sm">Project Management</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center">
                    <span className="text-neon-purple font-tech text-sm">IT</span>
                  </div>
                  <p className="text-gray-300 text-sm">IT Support</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-neon-pink/20 border border-neon-pink/30 flex items-center justify-center">
                    <span className="text-neon-pink font-tech text-sm">BA</span>
                  </div>
                  <p className="text-gray-300 text-sm">Business Analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center">
                    <span className="text-neon-cyan font-tech text-sm">LD</span>
                  </div>
                  <p className="text-gray-300 text-sm">Leadership</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
