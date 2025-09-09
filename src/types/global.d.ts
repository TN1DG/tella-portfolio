// Global type definitions for Turbopack optimizations

declare module '*.glsl' {
  const content: string;
  export default content;
}

declare module '*.vert' {
  const content: string;
  export default content;
}

declare module '*.frag' {
  const content: string;
  export default content;
}

declare module '*.woff' {
  const content: string;
  export default content;
}

declare module '*.woff2' {
  const content: string;
  export default content;
}

// Three.js module augmentations for better TypeScript support
declare module 'three/examples/jsm/*' {
  import { Object3D } from 'three';
  const content: any;
  export default content;
  export * from 'three';
}

// Framer Motion optimizations
declare module 'framer-motion' {
  export * from 'framer-motion/dist/framer-motion';
}

// Environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly SITE_URL: string;
      readonly TURBOPACK: string;
      readonly NEXT_TURBOPACK: string;
      readonly VERCEL_URL?: string;
      readonly PORT?: string;
    }
  }
}

// Window augmentations for development
declare global {
  interface Window {
    __TURBOPACK__?: boolean;
    __THREE_DEVTOOLS__?: any;
  }
}

export {};
