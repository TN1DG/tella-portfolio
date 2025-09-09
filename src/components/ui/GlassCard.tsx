"use client";

import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const glassCardVariants = cva(
  "relative rounded-2xl backdrop-blur-md border border-white/10 shadow-inner overflow-hidden group",
  {
    variants: {
      variant: {
        default: 
          "bg-gradient-to-br from-white/5 to-white/2 hover:from-white/10 hover:to-white/5",
        frosted: 
          "bg-gradient-to-br from-white/10 to-white/5 hover:from-white/15 hover:to-white/8",
        tinted: 
          "bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 hover:from-neon-cyan/10 hover:to-neon-purple/10 border-neon-cyan/20",
        dark: 
          "bg-gradient-to-br from-black/20 to-black/10 hover:from-black/30 hover:to-black/15",
        highlighted: 
          "bg-gradient-to-br from-neon-purple/10 to-neon-pink/5 hover:from-neon-purple/15 hover:to-neon-pink/10 border-neon-purple/30",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      glow: {
        none: "",
        subtle: "hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
        medium: "hover:shadow-[0_0_25px_rgba(0,255,255,0.15),inset_0_0_25px_rgba(147,51,234,0.1)]",
        intense: "hover:shadow-[0_0_35px_rgba(0,255,255,0.2),0_0_70px_rgba(147,51,234,0.1),inset_0_0_35px_rgba(236,72,153,0.05)]",
        neon: "hover:shadow-[0_0_30px_rgba(0,255,255,0.3),0_0_60px_rgba(147,51,234,0.2)]",
      },
      blur: {
        none: "backdrop-blur-none",
        sm: "backdrop-blur-sm",
        default: "backdrop-blur-md",
        lg: "backdrop-blur-lg",
        xl: "backdrop-blur-xl",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: "medium",
      blur: "default",
    },
  }
);

export interface GlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassCardVariants> {
  asChild?: boolean;
  hover?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, size, glow, blur, hover = true, asChild = false, children, ...props }, ref) => {
    const MotionDiv = hover ? motion.div : "div";
    
    const motionProps = hover ? {
      whileHover: { scale: 1.02, y: -2 },
      transition: { type: "spring", stiffness: 300, damping: 30 }
    } : {};

    return (
      <MotionDiv
        className={cn(glassCardVariants({ variant, size, glow, blur, className }))}
        ref={ref}
        {...motionProps}
        {...props}
      >
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Border glow overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-cyan/10 via-transparent to-neon-purple/10" />
          <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent" />
        </div>
        
        {/* Corner accent lights */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-radial from-neon-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-radial from-neon-purple/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </MotionDiv>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard, glassCardVariants };
