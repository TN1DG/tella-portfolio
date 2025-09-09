"use client";

import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const glowButtonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-display text-sm font-medium tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-sm border border-brown-600/30 shadow-sm overflow-hidden group",
  {
    variants: {
      variant: {
        default: 
          "bg-gradient-to-r from-brown-700 to-brown-600 text-base-cream hover:from-brown-600 hover:to-brown-500 hover:shadow-[0_0_15px_rgba(184,150,90,0.4)]",
        secondary: 
          "bg-gradient-to-r from-warm-amber/20 to-warm-gold/20 text-accent-gold hover:from-warm-amber/30 hover:to-warm-gold/30 hover:text-brown-800 hover:shadow-[0_0_15px_rgba(212,165,116,0.3)]",
        outline: 
          "bg-transparent border-2 border-warm-gold/40 text-accent-gold hover:border-warm-gold hover:bg-warm-gold/10 hover:shadow-[0_0_12px_rgba(184,150,90,0.3)]",
        ghost: 
          "bg-transparent text-accent-gold hover:bg-warm-gold/10 hover:shadow-[inset_0_0_12px_rgba(184,150,90,0.2)]",
        destructive:
          "bg-gradient-to-r from-red-800/20 to-red-700/20 text-red-300 hover:from-red-700/30 hover:to-red-600/30 hover:text-red-100 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-xl px-4 text-xs",
        lg: "h-12 rounded-2xl px-8 text-base",
        xl: "h-14 rounded-3xl px-10 text-lg",
        icon: "h-10 w-10",
      },
      glow: {
        none: "",
        subtle: "hover:shadow-[0_0_8px_rgba(184,150,90,0.3)]",
        medium: "hover:shadow-[0_0_15px_rgba(184,150,90,0.4)]",
        intense: "hover:shadow-[0_0_20px_rgba(184,150,90,0.5),0_0_40px_rgba(184,150,90,0.2)]",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: "medium",
    },
  }
);

export interface GlowButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart" | "onAnimationEnd">,
    VariantProps<typeof glowButtonVariants> {
  asChild?: boolean;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant, size, glow, children, ...props }, ref) => {
    return (
      <motion.button
        className={cn(glowButtonVariants({ variant, size, glow, className }))}
        ref={ref}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: "spring" as const, stiffness: 500, damping: 20, duration: 0.15 }}
        {...props}
      >
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-gold/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-out" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        
        {/* Subtle border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-warm-gold/10 via-warm-amber/10 to-warm-honey/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 blur-sm" />
      </motion.button>
    );
  }
);

GlowButton.displayName = "GlowButton";

export { GlowButton, glowButtonVariants };
