"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

interface ScrollNavProps {
  activeSection: number;
}

export default function ScrollNav({ activeSection }: ScrollNavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-xl bg-ink-950/80 border-b border-white/10 shadow-lg shadow-neon-cyan/5"
          : "backdrop-blur-sm bg-ink-950/50"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center"
            >
              <span className="font-display text-2xl font-bold text-glow-cyan hover-glow">
                T
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => {
                const isActive = activeSection === index;
                
                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "relative px-3 py-2 rounded-lg text-sm font-tech tracking-wide transition-all duration-300 group",
                        isActive
                          ? "text-neon-cyan shadow-[inset_0_0_10px_rgba(0,255,255,0.2)] bg-neon-cyan/10"
                          : "text-gray-300 hover:text-neon-cyan hover:bg-white/5"
                      )}
                    >
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30"
                          layoutId="activeTab"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ type: "spring", stiffness: 500, damping: 35 }}
                        />
                      )}
                      
                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Text */}
                      <span className="relative z-10 font-tech">{item.name}</span>
                      
                      {/* Animated underline glow */}
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink rounded-full"
                        initial={false}
                        animate={{
                          scaleX: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        whileHover={{
                          scaleX: isActive ? 1 : 0.8,
                          opacity: isActive ? 1 : 0.6,
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 30,
                          duration: 0.3
                        }}
                        style={{ 
                          transformOrigin: "center",
                          filter: "drop-shadow(0 0 4px currentColor)"
                        }}
                      />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Scroll Progress Indicator */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative w-32 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                style={{
                  width: `${((activeSection + 1) / navItems.length) * 100}%`
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="font-tech text-xs text-gray-400">
              {activeSection + 1}/{navItems.length}
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-neon-cyan hover:bg-white/10 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 relative">
                <motion.span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition-all duration-300",
                    mobileMenuOpen ? "rotate-45 top-3" : "top-1"
                  )}
                />
                <motion.span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current top-3 transition-all duration-300",
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <motion.span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current transform transition-all duration-300",
                    mobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                  )}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-ink-950/95 backdrop-blur-xl border-t border-white/10">
              {navItems.map((item, index) => {
                const isActive = activeSection === index;
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={cn(
                        "block w-full text-left px-3 py-2 rounded-lg text-base font-tech tracking-wide transition-all duration-300",
                        isActive
                          ? "text-neon-cyan bg-neon-cyan/10 shadow-[inset_0_0_10px_rgba(0,255,255,0.2)]"
                          : "text-gray-300 hover:text-neon-cyan hover:bg-white/5"
                      )}
                    >
                      <span className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {isActive && (
                          <motion.div
                            className="w-1 h-1 rounded-full bg-neon-cyan"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                          />
                        )}
                      </span>
                    </button>
                  </motion.div>
                );
              })}
              
              {/* Mobile Progress */}
              <div className="px-3 py-4 flex items-center gap-3">
                <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                    style={{
                      width: `${((activeSection + 1) / navItems.length) * 100}%`
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="font-tech text-xs text-gray-400">
                  {activeSection + 1}/{navItems.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
