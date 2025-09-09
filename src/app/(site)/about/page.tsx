"use client";

import SceneWrapper from "@/components/three/SceneWrapper";
import PageHero from "@/components/three/overlays/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { profile, summary } from "@/data/profile";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Three.js Scene Background */}
      <SceneWrapper 
        className="fixed inset-0 -z-10"
        camera={{ fov: 45, position: [0, 2, 8] }}
        backgroundColor="#070b12"
      >
        {/* TODO: Add AboutScene component here */}
        {/* <AboutScene /> */}
      </SceneWrapper>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <PageHero
          title="About Me"
          subtitle="GET TO KNOW ME BETTER"
          description="Discover my journey, passion for technology, and what drives me to create innovative solutions."
          showButtons={false}
        />
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Personal Summary */}
            <GlassCard variant="frosted" size="lg" glow="medium">
              <h3 className="font-tech text-2xl text-neon-cyan mb-6 tracking-wider">
                MY STORY
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  {summary}
                </p>
                {/* TODO: Add more personal story content */}
              </div>
            </GlassCard>

            {/* Quick Facts */}
            <GlassCard variant="tinted" size="lg" glow="medium">
              <h3 className="font-tech text-2xl text-neon-purple mb-6 tracking-wider">
                QUICK FACTS
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-tech text-gray-400">Name</span>
                  <span className="text-white">{profile.name}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-tech text-gray-400">Location</span>
                  <span className="text-white">{profile.location}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="font-tech text-gray-400">Email</span>
                  <a 
                    href={`mailto:${profile.email}`}
                    className="text-neon-cyan hover:text-glow-cyan transition-all duration-300"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-tech text-gray-400">LinkedIn</span>
                  <a 
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-purple hover:text-glow-purple transition-all duration-300"
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </GlassCard>

            {/* Values & Interests */}
            <GlassCard variant="highlighted" size="lg" glow="intense" className="lg:col-span-2">
              <h3 className="font-tech text-2xl text-neon-pink mb-6 tracking-wider text-center">
                VALUES & INTERESTS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* TODO: Add values and interests content from CV */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h4 className="font-tech text-neon-cyan mb-2">Innovation</h4>
                  <p className="text-gray-400 text-sm">Constantly exploring new technologies and creative solutions.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-tech text-neon-purple mb-2">Excellence</h4>
                  <p className="text-gray-400 text-sm">Committed to delivering high-quality work and continuous improvement.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-pink/20 border border-neon-pink/30 flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h4 className="font-tech text-neon-pink mb-2">Collaboration</h4>
                  <p className="text-gray-400 text-sm">Believing in the power of teamwork and knowledge sharing.</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
