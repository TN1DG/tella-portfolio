"use client";

import SceneWrapper from "@/components/three/SceneWrapper";
import PageHero from "@/components/three/overlays/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { skills } from "@/data/profile";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Technical Skills",
      data: skills.technical,
      color: "neon-cyan",
      icon: "💻"
    },
    {
      title: "Business Analysis",
      data: skills.businessAnalysis,
      color: "neon-purple",
      icon: "📊"
    },
    {
      title: "Systems & Tools",
      data: skills.systemsTools,
      color: "neon-pink",
      icon: "🛠️"
    },
    {
      title: "Soft Skills",
      data: skills.soft,
      color: "neon-blue",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Three.js Scene Background */}
      <SceneWrapper 
        className="fixed inset-0 -z-10"
        camera={{ fov: 45, position: [0, 2, 8] }}
        backgroundColor="#070b12"
      >
        {/* TODO: Add SkillsScene component here */}
        {/* <SkillsScene /> */}
      </SceneWrapper>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <PageHero
          title="Skills"
          subtitle="MY TECHNICAL ARSENAL"
          description="A comprehensive overview of my technical expertise, tools, and methodologies that drive successful project outcomes."
          showButtons={false}
        />
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Skills Overview */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-glow-cyan mb-6">
              Skill Categories
            </h2>
            <p className="font-body text-lg text-gray-400 max-w-3xl mx-auto">
              My expertise spans across multiple domains, from cutting-edge technical skills to essential 
              business analysis and soft skills that enable effective collaboration and project delivery.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <GlassCard 
                key={categoryIndex}
                variant={categoryIndex % 2 === 0 ? "tinted" : "frosted"} 
                size="lg" 
                glow="medium"
                className="h-full"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-${category.color}/20 border border-${category.color}/30 flex items-center justify-center`}>
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className={`font-tech text-2xl text-${category.color} tracking-wider`}>
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.data.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.data.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="flex items-center gap-3 p-3 bg-black/20 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className={`w-2 h-2 rounded-full bg-${category.color} flex-shrink-0`} />
                      <span className="text-gray-300 font-body">
                        {skill}
                      </span>
                      {/* TODO: Add skill proficiency levels */}
                      <div className="ml-auto flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < (skillIndex % 3) + 3 
                                ? `bg-${category.color}` 
                                : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Skill Proficiency Legend */}
          <GlassCard variant="highlighted" size="lg" glow="subtle">
            <h3 className="font-tech text-xl text-neon-cyan mb-4 text-center tracking-wider">
              PROFICIENCY LEVELS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i < 1 ? 'bg-red-400' : 'bg-gray-600'}`} />
                  ))}
                </div>
                <p className="text-gray-400 text-xs font-tech">Beginner</p>
              </div>
              <div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i < 2 ? 'bg-orange-400' : 'bg-gray-600'}`} />
                  ))}
                </div>
                <p className="text-gray-400 text-xs font-tech">Novice</p>
              </div>
              <div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i < 3 ? 'bg-yellow-400' : 'bg-gray-600'}`} />
                  ))}
                </div>
                <p className="text-gray-400 text-xs font-tech">Competent</p>
              </div>
              <div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i < 4 ? 'bg-neon-cyan' : 'bg-gray-600'}`} />
                  ))}
                </div>
                <p className="text-gray-400 text-xs font-tech">Proficient</p>
              </div>
              <div>
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full bg-neon-purple`} />
                  ))}
                </div>
                <p className="text-gray-400 text-xs font-tech">Expert</p>
              </div>
            </div>
          </GlassCard>

          {/* Skills Development Timeline */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-glow-purple mb-12 text-center">
              Learning Journey
            </h2>
            <GlassCard variant="frosted" size="xl" glow="medium">
              <div className="space-y-8">
                {/* TODO: Add skill development timeline from CV */}
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-neon-cyan border-2 border-ink-950 flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="font-tech text-lg text-neon-cyan mb-1">2023 - Present</h4>
                    <p className="text-white font-body mb-2">Advanced Full-Stack Development</p>
                    <p className="text-gray-400 text-sm">
                      Mastered React.js, TypeScript, and modern development practices through hands-on projects and continuous learning.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-neon-purple border-2 border-ink-950 flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="font-tech text-lg text-neon-purple mb-1">2022 - 2024</h4>
                    <p className="text-white font-body mb-2">IT Project Management & Business Analysis</p>
                    <p className="text-gray-400 text-sm">
                      Developed expertise in project management methodologies and business analysis through professional roles.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-4 h-4 rounded-full bg-neon-pink border-2 border-ink-950 flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="font-tech text-lg text-neon-pink mb-1">2020 - 2022</h4>
                    <p className="text-white font-body mb-2">Foundation in Computer Science</p>
                    <p className="text-gray-400 text-sm">
                      Built strong fundamentals in programming, database management, and system administration.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Skills Philosophy */}
          <GlassCard variant="tinted" size="xl" glow="intense">
            <div className="text-center">
              <h2 className="font-display text-4xl md:text-5xl text-glow-cyan mb-6">
                Continuous Growth
              </h2>
              <p className="font-body text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
                Technology evolves rapidly, and so do I. My approach to skill development is rooted in curiosity, 
                practical application, and a commitment to staying at the forefront of industry trends. 
                I believe in learning by doing and sharing knowledge with the community.
              </p>
              
              {/* Current Focus Areas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h4 className="font-tech text-neon-cyan mb-2">Emerging Tech</h4>
                  <p className="text-gray-400 text-sm">Exploring AI/ML, Web3, and next-generation development frameworks.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-tech text-neon-purple mb-2">Specialization</h4>
                  <p className="text-gray-400 text-sm">Deepening expertise in cloud architecture and scalable system design.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-pink/20 border border-neon-pink/30 flex items-center justify-center">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h4 className="font-tech text-neon-pink mb-2">Leadership</h4>
                  <p className="text-gray-400 text-sm">Developing advanced project management and team leadership capabilities.</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
