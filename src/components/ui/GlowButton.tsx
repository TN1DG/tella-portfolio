"use client";

import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const glowButtonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-tech text-sm font-medium tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md border border-white/10 shadow-inner overflow-hidden group",
  {
    variants: {
      variant: {
        default: 
          "bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 text-neon-cyan hover:from-neon-cyan/20 hover:to-neon-purple/20 hover:text-white hover:shadow-[0_0_20px_rgba(0,255,255,0.5),inset_0_0_20px_rgba(147,51,234,0.2)]",
        secondary: 
          "bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 text-neon-purple hover:from-neon-purple/20 hover:to-neon-pink/20 hover:text-white hover:shadow-[0_0_20px_rgba(147,51,234,0.5),inset_0_0_20px_rgba(236,72,153,0.2)]",
        outline: 
          "bg-transparent border-2 border-neon-cyan/30 text-neon-cyan hover:border-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]",
        ghost: 
          "bg-transparent text-neon-cyan hover:bg-neon-cyan/10 hover:shadow-[inset_0_0_15px_rgba(0,255,255,0.2)]",
        destructive:
          "bg-gradient-to-r from-red-500/10 to-red-600/10 text-red-400 hover:from-red-500/20 hover:to-red-600/20 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]",
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
        subtle: "hover:shadow-[0_0_10px_currentColor]",
        medium: "hover:shadow-[0_0_20px_currentColor]",
        intense: "hover:shadow-[0_0_30px_currentColor,0_0_60px_currentColor]",
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
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glowButtonVariants> {
  asChild?: boolean;
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant, size, glow, asChild = false, children, ...props }, ref) => {
    return (
      <motion.button
        className={cn(glowButtonVariants({ variant, size, glow, className }))}
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        
        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      </motion.button>
    );
  }
);

GlowButton.displayName = "GlowButton";

export { GlowButton, glowButtonVariants };
