#!/usr/bin/env node

/**
 * Turbopack Configuration Checker
 * Verifies that all Turbopack optimizations are properly configured
 */

const fs = require('fs');
const path = require('path');

const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';

function log(message, color = RESET) {
  console.log(`${color}${message}${RESET}`);
}

function checkFileExists(filePath, description) {
  const exists = fs.existsSync(filePath);
  log(`${exists ? '✅' : '❌'} ${description}: ${exists ? 'Found' : 'Missing'}`, exists ? GREEN : RED);
  return exists;
}

function checkPackageJson() {
  const packagePath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packagePath)) {
    log('❌ package.json not found', RED);
    return false;
  }

  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const hasDevScript = pkg.scripts?.dev?.includes('--turbopack');
  const hasRequiredDeps = [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    'framer-motion',
    'class-variance-authority',
    'clsx',
    'next-sitemap'
  ].every(dep => pkg.dependencies?.[dep] || pkg.devDependencies?.[dep]);

  log(`${hasDevScript ? '✅' : '❌'} Turbopack dev script configured`, hasDevScript ? GREEN : RED);
  log(`${hasRequiredDeps ? '✅' : '❌'} Required dependencies installed`, hasRequiredDeps ? GREEN : RED);

  return hasDevScript && hasRequiredDeps;
}

function checkNextConfig() {
  const nextConfigPath = path.join(process.cwd(), 'next.config.ts');
  if (!fs.existsSync(nextConfigPath)) {
    log('❌ next.config.ts not found', RED);
    return false;
  }

  const content = fs.readFileSync(nextConfigPath, 'utf8');
  const hasTurboConfig = content.includes('turbo:');
  const hasExperimentalTurbo = content.includes('experimental:') && content.includes('turbo:');
  const hasThreeJsOptimizations = content.includes('three');

  log(`${hasTurboConfig ? '✅' : '❌'} Turbopack configuration found`, hasTurboConfig ? GREEN : RED);
  log(`${hasThreeJsOptimizations ? '✅' : '❌'} Three.js optimizations configured`, hasThreeJsOptimizations ? GREEN : RED);

  return hasTurboConfig && hasThreeJsOptimizations;
}

function checkTailwindConfig() {
  const tailwindPath = path.join(process.cwd(), 'tailwind.config.ts');
  if (!fs.existsSync(tailwindPath)) {
    log('❌ tailwind.config.ts not found', RED);
    return false;
  }

  const content = fs.readFileSync(tailwindPath, 'utf8');
  const hasCustomFonts = content.includes('display:') && content.includes('tech:') && content.includes('body:');
  const hasNeonColors = content.includes('neon:');

  log(`${hasCustomFonts ? '✅' : '❌'} Custom fonts configured`, hasCustomFonts ? GREEN : RED);
  log(`${hasNeonColors ? '✅' : '❌'} Neon color scheme configured`, hasNeonColors ? GREEN : RED);

  return hasCustomFonts && hasNeonColors;
}

function main() {
  log('🚀 Turbopack Configuration Checker', YELLOW);
  log('====================================', YELLOW);

  let allChecksPass = true;

  // File existence checks
  allChecksPass &= checkFileExists('.env.local', 'Environment variables');
  allChecksPass &= checkFileExists('.env.development', 'Development environment');
  allChecksPass &= checkFileExists('turbo.json', 'Turbo configuration');
  allChecksPass &= checkFileExists('src/types/global.d.ts', 'Global type definitions');
  allChecksPass &= checkFileExists('src/lib/performance.ts', 'Performance utilities');

  // Configuration checks
  allChecksPass &= checkPackageJson();
  allChecksPass &= checkNextConfig();
  allChecksPass &= checkTailwindConfig();

  log('====================================', YELLOW);
  
  if (allChecksPass) {
    log('🎉 All Turbopack optimizations are properly configured!', GREEN);
    log('Run `npm run dev` to start development with Turbopack', GREEN);
  } else {
    log('⚠️  Some optimizations are missing or misconfigured', YELLOW);
    log('Please review the failed checks above', YELLOW);
  }
}

main();
