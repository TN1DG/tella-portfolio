"use client";

import SceneWrapper from "@/components/three/SceneWrapper";
import PageHero from "@/components/three/overlays/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { education, certifications, awards } from "@/data/profile";

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      {/* Three.js Scene Background */}
      <SceneWrapper 
        className="fixed inset-0 -z-10"
        camera={{ fov: 45, position: [0, 2, 8] }}
        backgroundColor="#070b12"
      >
        {/* TODO: Add EducationScene component here */}
        {/* <EducationScene /> */}
      </SceneWrapper>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <PageHero
          title="Education"
          subtitle="ACADEMIC FOUNDATION"
          description="My educational journey and continuous learning path that shapes my expertise in technology and innovation."
          showButtons={false}
        />
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Formal Education */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-glow-cyan mb-12 text-center">
              Academic Qualifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <GlassCard 
                  key={index}
                  variant={index % 2 === 0 ? "tinted" : "frosted"} 
                  size="lg" 
                  glow="medium"
                >
                  {/* Institution Header */}
                  <div className="mb-6">
                    <h3 className="font-tech text-2xl text-neon-cyan mb-2 tracking-wider">
                      {edu.institution}
                    </h3>
                    <h4 className="font-body text-xl text-white mb-2">
                      {edu.degree}
                    </h4>
                    {edu.location && (
                      <p className="text-gray-400 font-tech text-sm">
                        {edu.location}
                      </p>
                    )}
                  </div>

                  {/* Grade and Year */}
                  <div className="flex justify-between items-center p-4 bg-black/20 rounded-lg border border-white/10">
                    <div>
                      <p className="text-neon-purple font-tech text-sm tracking-wider">Grade</p>
                      <p className="text-white font-body text-lg">{edu.grade}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-neon-pink font-tech text-sm tracking-wider">Year</p>
                      <p className="text-white font-body text-lg">{edu.year}</p>
                    </div>
                  </div>

                  {/* TODO: Add coursework or specializations */}
                  <div className="mt-4 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/30 rounded-full">
                      <span className="w-2 h-2 bg-neon-cyan rounded-full"></span>
                      <span className="text-neon-cyan font-tech text-xs tracking-wider">
                        {index === 0 ? "ONGOING" : "COMPLETED"}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-glow-purple mb-12 text-center">
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <GlassCard 
                  key={index}
                  variant="highlighted" 
                  size="default" 
                  glow="subtle"
                  className="text-center"
                >
                  {/* Certification Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>

                  <h3 className="font-tech text-lg text-neon-purple mb-2 tracking-wider">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 font-body text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-white font-tech text-sm">{cert.year}</span>
                    {cert.status && (
                      <>
                        <span className="text-gray-500">•</span>
                        <span className={`font-tech text-xs tracking-wider px-2 py-1 rounded-full ${
                          cert.status === 'ongoing' 
                            ? 'bg-neon-cyan/20 text-neon-cyan'
                            : 'bg-neon-purple/20 text-neon-purple'
                        }`}>
                          {cert.status.toUpperCase()}
                        </span>
                      </>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Awards & Recognition */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-glow-pink mb-12 text-center">
              Awards & Recognition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <GlassCard 
                  key={index}
                  variant="frosted" 
                  size="lg" 
                  glow="medium"
                >
                  {/* Award Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-neon-pink/20 border border-neon-pink/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎖️</span>
                    </div>
                    <div>
                      <h3 className="font-tech text-xl text-neon-pink mb-1 tracking-wider">
                        {award.title}
                      </h3>
                      <p className="text-gray-400 font-body text-sm">
                        {award.issuer} • {award.year}
                      </p>
                    </div>
                  </div>

                  {/* Award Description */}
                  {award.description && (
                    <p className="text-gray-300 leading-relaxed">
                      {award.description}
                    </p>
                  )}
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <GlassCard variant="tinted" size="xl" glow="intense">
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl text-glow-cyan mb-8">
                Continuous Learning
              </h2>
              <p className="font-body text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                Education is not just about degrees and certificates—it's a lifelong journey of curiosity, 
                growth, and adaptation. I believe in staying current with emerging technologies and 
                continuously expanding my skillset to deliver innovative solutions.
              </p>
              
              {/* Learning Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-tech text-neon-cyan mb-2">
                    {education.length}+
                  </div>
                  <p className="text-gray-400 font-tech text-sm tracking-wider">
                    DEGREES
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-tech text-neon-purple mb-2">
                    {certifications.length}+
                  </div>
                  <p className="text-gray-400 font-tech text-sm tracking-wider">
                    CERTIFICATIONS
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-tech text-neon-pink mb-2">
                    {awards.length}+
                  </div>
                  <p className="text-gray-400 font-tech text-sm tracking-wider">
                    AWARDS
                  </p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
