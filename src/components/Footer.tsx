"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/tella",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/tella",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tella",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  },
];

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-brown-950 to-base-dark border-t border-brown-800/30">
      {/* Subtle coffee-themed background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-12 left-1/3 w-64 h-64 bg-warm-gold/5 rounded-full blur-2xl" />
        <div className="absolute -top-12 right-1/3 w-64 h-64 bg-warm-amber/5 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="flex items-center mb-4">
                <span className="font-display text-3xl font-bold text-accent-gold">
                  Tella
                </span>
              </Link>
              <p className="text-on-dark opacity-80 text-sm leading-relaxed max-w-md">
                Full-Stack Developer crafting digital experiences with modern technologies. 
                Specializing in React, TypeScript, and innovative web solutions.
              </p>
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-warm-amber/10 border border-brown-700/40 text-on-dark opacity-70 hover:text-accent-gold hover:bg-warm-gold/20 hover:border-warm-gold/50 transition-all duration-200 group"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.5)] transition-all duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-sm font-medium text-accent-amber tracking-wider uppercase mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-on-dark opacity-80 text-sm hover:text-accent-gold transition-colors duration-200 group"
                    >
                      <span className="group-hover:opacity-100">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display text-sm font-medium text-accent-amber tracking-wider uppercase mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:tella@example.com"
                  className="text-on-dark opacity-80 text-sm hover:text-accent-gold transition-colors duration-200 group block"
                >
                  <span className="group-hover:opacity-100">
                    tella@example.com
                  </span>
                </a>
                <p className="text-on-dark opacity-70 text-sm">
                  Available for freelance projects and full-time opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-brown-800/30 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs text-on-dark opacity-60">
            <p>© {currentYear} Tella. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link
                href="#privacy"
                className="hover:text-accent-gold transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="#terms"
                className="hover:text-accent-gold transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          
          <div className="mt-4 sm:mt-0">
            <p className="text-xs text-on-dark opacity-60 font-body">
              Built with{" "}
              <span className="text-accent-gold font-medium">Next.js</span>,{" "}
              <span className="text-accent-amber font-medium">TypeScript</span> &{" "}
              <span className="text-warm-gold font-medium">Tailwind CSS</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm-gold/30 to-transparent" />
    </footer>
  );
}
