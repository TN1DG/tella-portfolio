"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { 
  heroTitle, 
  heroSubtitle, 
  heroDescription, 
  heroButtons,
  staggerContainer 
} from "@/lib/motion";

interface PageHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showButtons?: boolean;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  className?: string;
}

export default function PageHero({
  title = "Tella",
  subtitle = "FULL-STACK DEVELOPER",
  description = "Crafting digital experiences with modern technologies. Specializing in React, TypeScript, and innovative web solutions.",
  showButtons = true,
  onPrimaryAction,
  onSecondaryAction,
  primaryButtonText = "VIEW PROJECTS",
  secondaryButtonText = "GET IN TOUCH",
  className = "",
}: PageHeroProps) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none z-10 ${className}`}>
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          {/* Main Title with Old English Font */}
          <motion.h1
            variants={heroTitle}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-glow-cyan hover-glow cursor-default"
          >
            {title}
          </motion.h1>

          {/* Subtitle with Tech Font */}
          <motion.h2
            variants={heroSubtitle}
            className="font-tech text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-neon-purple text-glow-purple tracking-wider"
          >
            {subtitle}
          </motion.h2>

          {/* Description */}
          {description && (
            <motion.p
              variants={heroDescription}
              className="font-body text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* Action Buttons */}
          {showButtons && (
            <motion.div
              variants={heroButtons}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 pointer-events-auto"
            >
              <motion.div variants={heroButtons}>
                <GlowButton 
                  variant="default" 
                  size="lg" 
                  glow="intense"
                  onClick={onPrimaryAction}
                  className="min-w-[200px]"
                >
                  {primaryButtonText}
                </GlowButton>
              </motion.div>
              
              <motion.div variants={heroButtons}>
                <GlowButton 
                  variant="secondary" 
                  size="lg" 
                  glow="intense"
                  onClick={onSecondaryAction}
                  className="min-w-[200px]"
                >
                  {secondaryButtonText}
                </GlowButton>
              </motion.div>
            </motion.div>
          )}

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 2, duration: 1 }
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="font-tech text-xs text-gray-400 tracking-wider">SCROLL</span>
              <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
                  animate={{
                    opacity: [1, 0],
                    y: [0, 16],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Decorative grid lines */}
        <div className="absolute inset-0 bg-grid opacity-10" />
        
        {/* Corner accent elements */}
        <div className="absolute top-8 left-8">
          <motion.div
            className="w-16 h-16 border-l-2 border-t-2 border-neon-cyan/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
        </div>
        
        <div className="absolute bottom-8 right-8">
          <motion.div
            className="w-16 h-16 border-r-2 border-b-2 border-neon-purple/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.8 }}
          />
        </div>
      </div>
    </div>
  );
}
