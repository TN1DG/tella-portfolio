import { Variants } from "framer-motion";

// Fade animations
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { opacity: 0, y: 50 },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { opacity: 0, y: -50 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { opacity: 0, x: -50 },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: { opacity: 0, x: 50 },
};

// Scale animations
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { opacity: 0, scale: 0.8 },
};

export const scaleInCenter: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      scale: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      }
    }
  },
  exit: { opacity: 0, scale: 0 },
};

// Stagger animations
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: {
      duration: 0.3,
    },
  },
};

// Slide animations
export const slideInUp: Variants = {
  initial: { y: "100%" },
  animate: { 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { y: "100%" },
};

export const slideInDown: Variants = {
  initial: { y: "-100%" },
  animate: { 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { y: "-100%" },
};

export const slideInLeft: Variants = {
  initial: { x: "-100%" },
  animate: { 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { x: "-100%" },
};

export const slideInRight: Variants = {
  initial: { x: "100%" },
  animate: { 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  exit: { x: "100%" },
};

// Reveal animations (for text)
export const revealUp: Variants = {
  initial: { y: "100%" },
  animate: { 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
};

export const revealMask: Variants = {
  initial: { 
    opacity: 0,
    clipPath: "inset(0 0 100% 0)"
  },
  animate: { 
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1] 
    }
  },
};

// Glow animations
export const glowPulse: Variants = {
  initial: {
    textShadow: "0 0 5px rgba(0, 255, 255, 0.3)",
  },
  animate: {
    textShadow: [
      "0 0 5px rgba(0, 255, 255, 0.3)",
      "0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(147, 51, 234, 0.4)",
      "0 0 5px rgba(0, 255, 255, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Floating animations
export const floatAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Rotation animations
export const rotateInfinite: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Page transition variants
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut",
      staggerChildren: 0.1 
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.4 }
  },
};

// Hero section variants
export const heroTitle: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const heroSubtitle: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const heroDescription: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.6,
    },
  },
};

export const heroButtons: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.9,
      staggerChildren: 0.2,
    },
  },
};
