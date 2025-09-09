// Performance monitoring utilities for Turbopack development

export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';
export const isTurbopack = process.env.TURBOPACK === '1' || process.env.NEXT_TURBOPACK === '1';

// Performance measurement utility
export function measurePerformance<T>(
  name: string,
  fn: () => T | Promise<T>
): T | Promise<T> {
  if (!isDevelopment || !isTurbopack) {
    return fn();
  }

  const start = performance.now();
  const result = fn();

  if (result instanceof Promise) {
    return result.then((value) => {
      const end = performance.now();
      console.log(`🚀 [${name}] took ${end - start} milliseconds (Turbopack)`);
      return value;
    });
  }

  const end = performance.now();
  console.log(`🚀 [${name}] took ${end - start} milliseconds (Turbopack)`);
  return result;
}

// Font loading optimization
export function optimizeFontLoading() {
  if (typeof window === 'undefined') return;

  // Preload critical fonts
  const fonts = [
    { family: 'Inter', weight: '400' },
    { family: 'Inter', weight: '500' },
    { family: 'Inter', weight: '600' },
    { family: 'Orbitron', weight: '400' },
    { family: 'Orbitron', weight: '700' },
    { family: 'UnifrakturMaguntia', weight: '400' },
  ];

  fonts.forEach(({ family, weight }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = `https://fonts.googleapis.com/css2?family=${family.replace(' ', '+')}:wght@${weight}&display=swap`;
    document.head.appendChild(link);
  });
}

// Three.js performance optimization
export function optimizeThreeJS() {
  if (typeof window === 'undefined') return;

  // Enable hardware acceleration
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  
  if (gl) {
    // Enable extensions for better performance
    gl.getExtension('OES_vertex_array_object');
    gl.getExtension('WEBGL_draw_buffers');
    gl.getExtension('OES_texture_float');
    gl.getExtension('OES_texture_half_float');
    gl.getExtension('WEBGL_depth_texture');
  }
}

// Bundle size monitoring (development only)
export function monitorBundleSize() {
  if (!isDevelopment || !isTurbopack) return;

  // Monitor dynamic imports
  const originalImport = window.eval('import');
  if (originalImport) {
    window.eval(`
      import = function(...args) {
        console.log('📦 Dynamic import:', args[0]);
        const start = performance.now();
        return originalImport(...args).then(module => {
          const end = performance.now();
          console.log('✅ Loaded in', end - start, 'ms:', args[0]);
          return module;
        });
      }
    `);
  }
}

// Memory usage monitoring
export function monitorMemoryUsage() {
  if (!isDevelopment || !isTurbopack || !('memory' in performance)) return;

  setInterval(() => {
    const memory = (performance as any).memory;
    console.log('🧠 Memory usage:', {
      used: `${Math.round(memory.usedJSHeapSize / 1024 / 1024)} MB`,
      total: `${Math.round(memory.totalJSHeapSize / 1024 / 1024)} MB`,
      limit: `${Math.round(memory.jsHeapSizeLimit / 1024 / 1024)} MB`,
    });
  }, 30000); // Log every 30 seconds
}

// Initialize performance monitoring
export function initPerformanceMonitoring() {
  if (!isDevelopment || !isTurbopack) return;

  console.log('🚀 Turbopack performance monitoring enabled');
  
  optimizeFontLoading();
  optimizeThreeJS();
  monitorBundleSize();
  monitorMemoryUsage();

  // Mark Turbopack as available
  if (typeof window !== 'undefined') {
    window.__TURBOPACK__ = true;
  }
}
