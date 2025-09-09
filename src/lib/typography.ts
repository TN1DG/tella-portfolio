/**
 * Typography utility classes and helpers
 * Ensures consistent font usage across the application
 */

export const typography = {
  // Hero titles with warm gradient
  heroTitle: "hero-title font-display gradient-fullname",
  heroSubtitle: "hero-title font-display text-glow-gold",
  
  // Section headings with warm colors
  sectionTitle: "section-heading font-display text-glow-warm tracking-wider",
  cardTitle: "font-display text-brown-700 tracking-wider",
  navItem: "nav-item font-display tracking-wide text-brown-600",
  
  // UI accents with warm colors
  uiAccent: "ui-accent font-display tracking-wider text-warm-gold",
  badge: "font-display text-xs tracking-wider uppercase text-brown-600",
  
  // Body text with warm colors
  bodyText: "font-body leading-relaxed text-brown-700",
  bodyLarge: "font-body text-lg leading-relaxed text-brown-600",
  bodySmall: "font-body text-sm text-brown-500",
  
  // Special cases
  logo: "font-display text-glow-gold hover-glow",
} as const;

export type TypographyKey = keyof typeof typography;

/**
 * Get typography classes for a specific element type
 */
export const getTypographyClasses = (type: TypographyKey): string => {
  return typography[type];
};

/**
 * Combine typography classes with additional classes
 */
export const combineTypography = (type: TypographyKey, additionalClasses?: string): string => {
  const baseClasses = typography[type];
  return additionalClasses ? `${baseClasses} ${additionalClasses}` : baseClasses;
};
