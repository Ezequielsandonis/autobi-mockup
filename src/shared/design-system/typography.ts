/**
 * Design Tokens - Tipografía
 * 
 * Sistema de tipografía con variantes predefinidas
 * Basado en la escala tipográfica del proyecto
 */

export const typography = {
  // Encabezados
  h1: {
    fontSize: '72px',
    lineHeight: '90px',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  h2: {
    fontSize: '60px',
    lineHeight: '72px',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  h3: {
    fontSize: '48px',
    lineHeight: '60px',
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  h4: {
    fontSize: '36px',
    lineHeight: '44px',
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  h5: {
    fontSize: '30px',
    lineHeight: '38px',
    fontWeight: 600,
    letterSpacing: '0em',
  },
  h6: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 600,
    letterSpacing: '0em',
  },

  // Subtítulos
  subtitle1: {
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: 500,
    letterSpacing: '0em',
  },
  subtitle2: {
    fontSize: '18px',
    lineHeight: '28px',
    fontWeight: 500,
    letterSpacing: '0em',
  },

  // Cuerpo de texto
  body1: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400,
    letterSpacing: '0em',
  },
  body2: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    letterSpacing: '0em',
  },

  // Texto pequeño
  caption: {
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: 400,
    letterSpacing: '0.01em',
  },

  // Texto muy pequeño
  overline: {
    fontSize: '10px',
    lineHeight: '16px',
    fontWeight: 500,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },

  // Estilo para botones
  button: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
    letterSpacing: '0.02em',
    textTransform: 'none',
  },

  // Peso de fuente
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  // Familias de fuente (si se personalizan)
  fontFamily: {
    primary: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    secondary: 'monospace',
  },
} as const;

// Tipo para la tipografía (útil para TypeScript)
export type TypographyScale = typeof typography;

// Tipos de variantes disponibles
export type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'button';
