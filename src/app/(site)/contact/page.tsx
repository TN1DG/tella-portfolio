"use client";

import { useState } from "react";
import SceneWrapper from "@/components/three/SceneWrapper";
import PageHero from "@/components/three/overlays/PageHero";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { profile } from "@/data/profile";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      {/* Three.js Scene Background */}
      <SceneWrapper 
        className="fixed inset-0 -z-10"
        camera={{ fov: 45, position: [0, 2, 8] }}
        backgroundColor="#070b12"
      >
        {/* TODO: Add ContactScene component here */}
        {/* <ContactScene /> */}
      </SceneWrapper>

      {/* Hero Section */}
      <section className="relative min-h-screen">
        <PageHero
          title="Contact"
          subtitle="LET'S CONNECT"
          description="Ready to collaborate on your next project? I'd love to hear from you and discuss how we can work together."
          showButtons={false}
        />
      </section>

      {/* Content Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
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

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center">
                      <span className="text-xl">📱</span>
                    </div>
                    <div>
                      <p className="text-gray-400 font-tech text-sm tracking-wider">Phone</p>
                      <a 
                        href={`tel:${profile.phone}`}
                        className="text-white hover:text-neon-purple transition-colors duration-300 font-body"
                      >
                        {profile.phone}
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
                  <label className="block text-gray-400 font-tech text-sm tracking-wider mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
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
                  <label className="block text-gray-400 font-tech text-sm tracking-wider mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
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
                  <label className="block text-gray-400 font-tech text-sm tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black/20 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-neon-cyan focus:outline-none transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-400 font-tech text-sm tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
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

          {/* Alternative Contact Methods */}
          <div className="mt-16">
            <GlassCard variant="frosted" size="xl" glow="subtle">
              <h3 className="font-tech text-2xl text-neon-cyan mb-8 text-center tracking-wider">
                OTHER WAYS TO CONNECT
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Schedule a Call */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-cyan/20 border border-neon-cyan/30 flex items-center justify-center">
                    <span className="text-2xl">📞</span>
                  </div>
                  <h4 className="font-tech text-neon-cyan mb-2">Schedule a Call</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Let's have a direct conversation about your project needs.
                  </p>
                  <GlowButton variant="outline" size="sm">
                    Book a Call
                  </GlowButton>
                </div>

                {/* Social Media */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-purple/20 border border-neon-purple/30 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h4 className="font-tech text-neon-purple mb-2">Social Media</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Connect with me on LinkedIn for professional networking.
                  </p>
                  <GlowButton 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.open(profile.linkedin, '_blank')}
                  >
                    Follow Me
                  </GlowButton>
                </div>

                {/* Quick Response */}
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neon-pink/20 border border-neon-pink/30 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="font-tech text-neon-pink mb-2">Quick Response</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Need a fast response? Send me a direct email.
                  </p>
                  <GlowButton 
                    variant="outline" 
                    size="sm"
                    onClick={() => window.location.href = `mailto:${profile.email}`}
                  >
                    Email Now
                  </GlowButton>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
