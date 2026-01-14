/**
 * Design Tokens - Espaciado
 * 
 * Sistema de espaciado basado en múltiplos de 4px (base unit: 4px)
 * 
 * Uso:
 * - Para espaciado en componentes: usar spacingPresets.component
 * - Para espaciado entre secciones: usar spacingPresets.section
 * - Para padding de contenedores: usar spacingPresets.container
 * - Para control fino: usar valores individuales (spacing[0] a spacing[32])
 */

const baseUnit = 4; // 4px

export const spacing = {
  0: '0px',
  1: `${baseUnit * 1}px`,      // 4px
  2: `${baseUnit * 2}px`,      // 8px
  3: `${baseUnit * 3}px`,      // 12px
  4: `${baseUnit * 4}px`,      // 16px
  5: `${baseUnit * 5}px`,      // 20px
  6: `${baseUnit * 6}px`,      // 24px
  8: `${baseUnit * 8}px`,      // 32px
  10: `${baseUnit * 10}px`,    // 40px
  12: `${baseUnit * 12}px`,    // 48px
  16: `${baseUnit * 16}px`,    // 64px
  20: `${baseUnit * 20}px`,    // 80px
  24: `${baseUnit * 24}px`,    // 96px
  32: `${baseUnit * 32}px`,    // 128px
} as const;

/**
 * Presets de espaciado para casos comunes
 */
export const spacingPresets = {
  // Espaciado entre componentes pequeños (inputs, botones en grupos)
  component: {
    xs: spacing[2],  // 8px
    sm: spacing[3],  // 12px
    md: spacing[4],  // 16px
    lg: spacing[6],  // 24px
  },

  // Espaciado entre secciones o grupos de componentes
  section: {
    xs: spacing[4],  // 16px
    sm: spacing[6],  // 24px
    md: spacing[8],  // 32px
    lg: spacing[12], // 48px
    xl: spacing[16], // 64px
  },

  // Padding para contenedores y cards
  container: {
    xs: spacing[3],  // 12px
    sm: spacing[4],  // 16px
    md: spacing[6],  // 24px
    lg: spacing[8],  // 32px
    xl: spacing[12], // 48px
  },

  // Padding para inputs y elementos de formulario
  input: {
    x: spacing[3],   // 12px horizontal
    y: spacing[2],   // 8px vertical
  },

  // Margin para elementos de página
  page: {
    xs: spacing[4],  // 16px
    sm: spacing[6],  // 24px
    md: spacing[8],  // 32px
    lg: spacing[12], // 48px
  },
} as const;

// Tipo para el espaciado (útil para TypeScript)
export type SpacingScale = typeof spacing;
export type SpacingPresets = typeof spacingPresets;
