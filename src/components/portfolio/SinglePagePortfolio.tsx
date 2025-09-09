"use client";

import { useState, useEffect, useRef } from "react";
import { profile, summary, skills, experience, projects, education } from "@/data/profile";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";

interface SinglePagePortfolioProps {
  onSectionChange: (section: number) => void;
}

export default function SinglePagePortfolio({ onSectionChange }: SinglePagePortfolioProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // References to section elements
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  // Intersection observer to track active section
  useEffect(() => {
    const observers = sectionsRef.current.map((section, index) => {
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            onSectionChange(index);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(section);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [onSectionChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Clean up summary text
  const cleanSummary = summary.replace(/\[Please replace.*?\]/g, '').trim() || 
    "Experienced IT professional with expertise in project management, business analysis, and full-stack development. Passionate about creating innovative solutions and leveraging technology to solve complex problems.";

  const tagline = "Experienced IT professional with expertise in project management, business analysis, and full-stack development";

  return (
    <div className="min-h-screen">
      {/* Section 1: Home - Brightest */}
      <section 
        ref={el => { sectionsRef.current[0] = el; }}
        id="home" 
        className="min-h-screen flex items-center justify-center px-6 section-bg-cream"
      >
        <div className="text-center max-w-4xl">
          {/* Big Name with Brown-Yellow Gradient */}
          <h1 className="hero-title font-display text-6xl md:text-8xl lg:text-9xl gradient-fullname mb-6" 
              role="heading"
              aria-level={1}>
            {profile.name}
          </h1>
          
          {/* Tagline */}
          <p className="font-body text-xl md:text-2xl text-on-cream mb-12 max-w-3xl mx-auto leading-relaxed"
             role="text"
             aria-label="Professional tagline">
            {tagline}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <GlowButton 
              variant="default" 
              size="lg" 
              glow="intense"
              className="min-w-[200px]"
              onClick={() => sectionsRef.current[3]?.scrollIntoView({ behavior: 'smooth' })}
            >
              VIEW PROJECTS
            </GlowButton>
            
            <GlowButton 
              variant="outline" 
              size="lg" 
              glow="medium"
              className="min-w-[200px]"
              onClick={() => sectionsRef.current[6]?.scrollIntoView({ behavior: 'smooth' })}
            >
              GET IN TOUCH
            </GlowButton>
          </div>
        </div>
      </section>

      {/* Section 2: About - Medium Brown */}
      <section 
        ref={el => { sectionsRef.current[1] = el; }}
        id="about" 
        className="min-h-screen py-20 px-6 section-bg-medium-brown"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-accent-gold mb-6">
              About Me
            </h2>
            <p className="font-body text-lg text-on-medium max-w-2xl mx-auto">
              Discover my journey, passion for technology, and what drives me to create innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Personal Summary */}
            <div>
              <GlassCard variant="frosted" size="lg" glow="medium">
                <h3 className="font-display text-2xl text-accent-gold mb-6 tracking-wider">
                  MY STORY
                </h3>
                <div className="space-y-4">
                  <p className="leading-relaxed text-lg text-on-medium">
                    {cleanSummary}
                  </p>
                  <p className="leading-relaxed text-on-medium opacity-80">
                    I combine technical expertise with strong analytical skills to deliver 
                    comprehensive solutions that bridge the gap between business requirements 
                    and technical implementation.
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Key Facts */}
            <div className="space-y-8">
              <GlassCard variant="tinted" size="lg" glow="medium">
                <h3 className="font-display text-2xl text-accent-amber mb-6 tracking-wider">
                  KEY FACTS
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-warm-amber/20">
                    <span className="font-body text-on-medium opacity-80">Name</span>
                    <span className="text-on-medium font-body">{profile.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-warm-amber/20">
                    <span className="font-body text-on-medium opacity-80">Location</span>
                    <span className="text-on-medium font-body">{profile.location}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-warm-amber/20">
                    <span className="font-body text-on-medium opacity-80">Email</span>
                    <a 
                      href={`mailto:${profile.email}`}
                      className="text-accent-gold hover:text-accent-amber transition-all duration-300 font-body"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-body text-on-medium opacity-80">LinkedIn</span>
                    <a 
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-gold hover:text-accent-amber transition-all duration-300 font-body"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </GlassCard>

              {/* Focus Areas */}
              <GlassCard variant="highlighted" size="lg" glow="subtle">
                <h3 className="font-display text-xl text-accent-amber mb-4 tracking-wider text-center">
                  FOCUS AREAS
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {["Full-Stack Development", "Project Management", "Business Analysis", "IT Infrastructure"].map((area, index) => (
                    <div key={index} className="text-center p-3 bg-warm-gold/15 rounded-lg border border-warm-amber/30 backdrop-blur-sm">
                      <span className="text-on-medium font-body text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Experience - Warm Brown */}
      <section 
        ref={el => { sectionsRef.current[2] = el; }}
        id="experience" 
        className="min-h-screen py-20 px-6 section-bg-warm-brown"
      >
        <div className="max-w-7xl mx-auto">
          {/* Timeline Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-accent-amber mb-4">
              Career Timeline
            </h2>
            <p className="font-body text-lg text-on-medium max-w-2xl mx-auto">
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
                      <h5 className="font-tech text-sm text-neon-pink mb-3 tracking-wider uppercase">
                        Key Responsibilities
                      </h5>
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <div key={respIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-neon-pink mt-2 flex-shrink-0" />
                          <p className="text-gray-300 leading-relaxed">
                            {responsibility.includes('[Bullet point') 
                              ? `Led key initiatives in ${exp.role.toLowerCase()} responsibilities, contributing to team success and project delivery.`
                              : responsibility}
                          </p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Projects - Rich Brown */}
      <section 
        ref={el => { sectionsRef.current[3] = el; }}
        id="projects" 
        className="min-h-screen py-20 px-6 section-bg-rich-brown"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-accent-gold mb-6">
              Projects
            </h2>
            <p className="font-body text-lg text-on-dark max-w-2xl mx-auto">
              Explore a collection of projects that showcase my technical skills, creativity, and problem-solving abilities.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div key={index} className="relative group h-full">
                {/* Project Background Showcase */}
                {project.liveLink && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-brown-100 via-brown-50 to-base-cream opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                    {/* Simulated project preview */}
                    <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-warm-gold/10 to-warm-amber/5 border border-brown-300/30 opacity-30 group-hover:opacity-50 transition-all duration-500">
                      <div className="p-3 space-y-2">
                        <div className="h-2 bg-brown-400/30 rounded w-3/4" />
                        <div className="h-2 bg-brown-300/20 rounded w-1/2" />
                        <div className="h-16 bg-warm-gold/20 rounded-lg mt-3" />
                        <div className="flex gap-2 mt-2">
                          <div className="h-1 bg-brown-400/30 rounded flex-1" />
                          <div className="h-1 bg-brown-300/20 rounded flex-1" />
                        </div>
                      </div>
                    </div>
                    {/* Project Icon */}
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <span className="text-4xl">
                        {project.name.includes('Sushiman') ? '🍣' : 
                         project.name.includes('NEXUS') ? '🤖' : 
                         project.name.includes('Diners') ? '🍽️' : '🚀'}
                      </span>
                    </div>
                  </div>
                )}
                
                <GlassCard 
                  variant={index % 2 === 0 ? "tinted" : "highlighted"} 
                  size="lg" 
                  glow="medium"
                  className="h-full flex flex-col relative z-10 project-card"
                >
                {/* Project Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-2xl text-accent-gold tracking-wider">
                      {project.name}
                    </h3>
                    {/* Special badge for live projects */}
                    {project.liveLink && (
                      <span className="px-2 py-1 text-xs font-display tracking-wider bg-warm-gold/20 border border-warm-gold/40 rounded-full text-accent-amber">
                        LIVE
                      </span>
                    )}
                  </div>
                  <p className="leading-relaxed mb-4 text-on-dark">
                    {project.description.includes('[Brief description') 
                      ? (project.name === 'YTG Portfolio Platform' 
                          ? 'A modern portfolio platform showcasing projects and skills with interactive 3D backgrounds and responsive design.'
                          : 'A beautiful restaurant landing page featuring modern design principles and smooth user interactions.')
                      : project.description}
                  </p>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="font-display text-sm text-accent-amber mb-3 tracking-wider uppercase">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-body tracking-wider bg-warm-gold/20 border border-warm-gold/30 rounded-full text-accent-gold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Goals */}
                <div className="mb-6 flex-grow">
                  <h4 className="font-display text-sm text-accent-amber mb-3 tracking-wider uppercase">
                    Key Goals
                  </h4>
                  <div className="space-y-2">
                    {project.goals.map((goal, goalIndex) => (
                      <div key={goalIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-warm-amber mt-2 flex-shrink-0" />
                        <p className="text-on-dark text-sm leading-relaxed">
                          {goal.includes('[Goal') 
                            ? (goalIndex === 0 ? 'Create an engaging user experience' 
                               : goalIndex === 1 ? 'Implement modern web technologies'
                               : 'Ensure responsive and accessible design')
                            : goal}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 mt-auto pt-4">
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
                  {!project.liveLink && !project.githubLink && (
                    <span className="px-4 py-2 text-sm text-gray-400 bg-gray-800 rounded-lg">
                      Links Coming Soon
                    </span>
                  )}
                </div>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="font-display text-3xl md:text-4xl text-accent-amber mb-4">
              Interested in Collaboration?
            </h3>
            <p className="font-body text-lg text-on-dark mb-8 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to contribute to your vision.
            </p>
            <GlowButton 
              variant="secondary" 
              size="lg" 
              glow="intense"
              onClick={() => sectionsRef.current[6]?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let&apos;s Work Together
            </GlowButton>
          </div>
        </div>
      </section>

      {/* Section 5: Education - Rich Brown */}
      <section 
        ref={el => { sectionsRef.current[4] = el; }}
        id="education" 
        className="min-h-screen py-20 px-6 section-bg-rich-brown"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero */}
          <div className="text-center">
            <h2 className="font-display text-4xl md:text-6xl text-accent-gold mb-6">
              Education
            </h2>
            <p className="font-body text-lg text-on-dark max-w-2xl mx-auto">
              My educational journey and continuous learning path that shapes my expertise in technology and innovation.
            </p>
          </div>

          {/* Formal Education */}
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-accent-amber mb-12 text-center">
              Academic Qualifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <GlassCard 
                  key={index}
                  variant={index % 2 === 0 ? "tinted" : "frosted"} 
                  size="lg" 
                  glow="medium"
                >
                  <div className="mb-6">
                    <h4 className="font-tech text-2xl text-neon-cyan mb-2 tracking-wider">
                      {edu.institution}
                    </h4>
                    <h5 className="font-body text-xl text-white mb-2">
                      {edu.degree}
                    </h5>
                    {edu.location && (
                      <p className="text-gray-400 font-tech text-sm">
                        {edu.location}
                      </p>
                    )}
                  </div>

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
        </div>
      </section>

      {/* Section 6: Skills - Deep Brown */}
      <section 
        ref={el => { sectionsRef.current[5] = el; }}
        id="skills" 
        className="min-h-screen py-20 px-6 section-bg-deep-brown"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Hero */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-accent-gold mb-6">
              Skill Categories
            </h2>
            <p className="font-body text-lg text-on-dark max-w-3xl mx-auto">
              My expertise spans across multiple domains, from cutting-edge technical skills to essential 
              business analysis and soft skills that enable effective collaboration and project delivery.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { title: "Technical Skills", data: skills.technical, color: "neon-cyan", icon: "💻" },
              { title: "Business Analysis", data: skills.businessAnalysis, color: "neon-purple", icon: "📊" },
              { title: "Systems & Tools", data: skills.systemsTools, color: "neon-pink", icon: "🛠️" },
              { title: "Soft Skills", data: skills.soft, color: "neon-blue", icon: "🤝" }
            ].map((category, categoryIndex) => (
              <GlassCard 
                key={categoryIndex}
                variant={categoryIndex % 2 === 0 ? "tinted" : "frosted"} 
                size="lg" 
                glow="medium"
                className="h-full"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center">
                    <span className="text-xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-tech text-2xl text-neon-cyan tracking-wider">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {category.data.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap gap-3">
                  {category.data.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-4 py-2 bg-black/30 border border-neon-cyan/30 rounded-full text-gray-300 hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300 font-body text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Contact - Darkest Brown */}
      <section 
        ref={el => { sectionsRef.current[6] = el; }}
        id="contact" 
        className="min-h-screen py-20 px-6 section-bg-dark-brown"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl text-accent-gold mb-6">
              Let&apos;s Connect
            </h2>
            <p className="font-body text-lg text-on-dark max-w-2xl mx-auto">
              Ready to collaborate on your next project? I&apos;d love to hear from you and discuss how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <GlassCard variant="tinted" size="lg" glow="medium">
                <h3 className="font-tech text-2xl text-neon-cyan mb-6 tracking-wider">
                  GET IN TOUCH
                </h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-400 font-tech text-sm tracking-wider">Email</p>
                      <a 
                        href={`mailto:${profile.email}`}
                        className="text-white hover:text-neon-cyan transition-colors duration-300 font-body"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center">
                      <span className="text-xl">💼</span>
                    </div>
                    <div>
                      <p className="text-gray-400 font-tech text-sm tracking-wider">LinkedIn</p>
                      <a 
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-neon-cyan transition-colors duration-300 font-body"
                      >
                        View Profile
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-neon-pink/20 border border-neon-pink/30 flex items-center justify-center">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="text-gray-400 font-tech text-sm tracking-wider">Location</p>
                      <p className="text-white font-body">{profile.location}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Availability */}
              <GlassCard variant="frosted" size="lg" glow="subtle">
                <h3 className="font-tech text-xl text-neon-purple mb-4 tracking-wider">
                  AVAILABILITY
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-body">Available for new projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-neon-cyan rounded-full"></div>
                    <span className="text-white font-body">Open to freelance opportunities</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-neon-purple rounded-full"></div>
                    <span className="text-white font-body">Interested in full-time roles</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-black/20 rounded-lg border border-white/10">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <strong className="text-neon-cyan">Response Time:</strong> I typically respond to messages within 24 hours during weekdays.
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Contact Form */}
            <GlassCard variant="highlighted" size="lg" glow="medium">
              <h3 className="font-tech text-2xl text-neon-pink mb-6 tracking-wider">
                SEND MESSAGE
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-400 font-tech text-sm tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-400 font-tech text-sm tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-400 font-tech text-sm tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    placeholder="What&apos;s this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-400 font-tech text-sm tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project, ideas, or how I can help..."
                  />
                </div>

                {/* Submit Button */}
                <GlowButton 
                  type="submit" 
                  variant="default" 
                  size="lg" 
                  glow="intense"
                  className="w-full"
                >
                  Send Message
                </GlowButton>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
