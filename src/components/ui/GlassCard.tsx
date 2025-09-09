"use client";

import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

const glassCardVariants = cva(
  "relative rounded-2xl backdrop-blur-lg border shadow-lg overflow-hidden group",
  {
    variants: {
      variant: {
        default: 
          "bg-gradient-to-br from-base-cream/80 to-brown-100/60 hover:from-base-cream/90 hover:to-brown-100/70 border-brown-400/60 shadow-brown-300/20",
        frosted: 
          "bg-gradient-to-br from-brown-100/70 to-brown-200/50 hover:from-brown-100/80 hover:to-brown-200/60 border-brown-500/50 shadow-brown-400/20 backdrop-blur-xl",
        tinted: 
          "bg-gradient-to-br from-warm-gold/25 to-brown-300/40 hover:from-warm-gold/35 hover:to-brown-300/50 border-warm-gold/60 shadow-warm-gold/15",
        dark: 
          "bg-gradient-to-br from-brown-800/70 to-brown-900/50 hover:from-brown-700/80 hover:to-brown-800/60 border-brown-600/70 shadow-brown-900/30",
        highlighted: 
          "bg-gradient-to-br from-warm-amber/35 to-warm-honey/25 hover:from-warm-amber/45 hover:to-warm-honey/35 border-warm-amber/70 shadow-warm-amber/20 backdrop-blur-xl",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      glow: {
        none: "",
        subtle: "hover:shadow-[0_0_15px_rgba(101,76,50,0.3)]",
        medium: "hover:shadow-[0_0_25px_rgba(184,150,90,0.35),inset_0_0_25px_rgba(101,76,50,0.2)]",
        intense: "hover:shadow-[0_0_35px_rgba(184,150,90,0.4),0_0_70px_rgba(101,76,50,0.3),inset_0_0_35px_rgba(212,165,116,0.15)]",
        neon: "hover:shadow-[0_0_30px_rgba(184,150,90,0.5),0_0_60px_rgba(156,124,92,0.4)]",
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
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart" | "onAnimationEnd">,
    VariantProps<typeof glassCardVariants> {
  asChild?: boolean;
  hover?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant, size, glow, blur, hover = true, children, ...props }, ref) => {
    const MotionDiv = hover ? motion.div : "div";
    
    const motionProps = hover ? {
      whileHover: { scale: 1.01, y: -1 },
      transition: { type: "spring" as const, stiffness: 400, damping: 25, duration: 0.2 }
    } : {};

    return (
      <MotionDiv
        className={cn(glassCardVariants({ variant, size, glow, blur, className }))}
        ref={ref}
        {...motionProps}
        {...props}
      >
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-warm-gold/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
        
        {/* Glass reflection overlay */}
        <div className="absolute inset-0 rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-base-cream/20 via-transparent to-transparent" />
          <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-tl from-transparent via-warm-gold/8 to-base-cream/15" />
        </div>
        
        {/* Frosted glass effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brown-50/10 via-transparent to-brown-100/5 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Corner accent lights */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-radial from-warm-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl" />
        <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-radial from-warm-amber/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl" />
      </MotionDiv>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard, glassCardVariants };
