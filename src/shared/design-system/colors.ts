/**
 * Design Tokens - Colores
 * 
 * Sistema de colores moderno para Cibus Distribuidora - Plataforma de BI/Data Science
 * - Primary: Índigo/Violeta - Tecnología e innovación
 * - Secondary: Grises modernos - Profesionalismo
 * - Semánticos: Success, Warning, Error, Info
 * 
 * Paleta moderna inspirada en plataformas SaaS de analytics y BI
 * Regla de oro: NUNCA usar colores hardcodeados. Siempre usar este sistema.
 */

export const colors = {
  // Colores Primarios (Índigo/Violeta - Tecnología e innovación)
  primary: {
    50: '#f5f3ff',
    100: '#ede9fe',
    200: '#ddd6fe',
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#8b5cf6', // Color principal - Violeta moderno
    600: '#7c3aed',
    700: '#6d28d9',
    800: '#5b21b6',
    900: '#4c1d95',
    main: '#8b5cf6',
    light: '#a78bfa',
    dark: '#7c3aed',
    contrastText: '#ffffff',
  },

  // Colores Secundarios (Grises modernos y neutros)
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    main: '#64748b',
    light: '#94a3b8',
    dark: '#334155',
    contrastText: '#ffffff',
  },

  // Colores Semánticos (Modernos y vibrantes)
  success: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981', // Verde esmeralda moderno
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    main: '#10b981',
    light: '#34d399',
    dark: '#059669',
    contrastText: '#ffffff',
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    main: '#f59e0b',
    light: '#fbbf24',
    dark: '#d97706',
    contrastText: '#000000',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    main: '#ef4444',
    light: '#f87171',
    dark: '#dc2626',
    contrastText: '#ffffff',
  },

  info: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4', // Cyan moderno
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
    main: '#06b6d4',
    light: '#22d3ee',
    dark: '#0891b2',
    contrastText: '#ffffff',
  },

  // Escala de Grises (Neutral y moderna)
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },

  // Colores de Estado
  status: {
    active: '#10b981',
    inactive: '#64748b',
    pending: '#f59e0b',
    completed: '#8b5cf6',
    cancelled: '#ef4444',
    draft: '#94a3b8',
  },

  // Colores de Fondo
  background: {
    default: '#ffffff',
    paper: '#ffffff',
    dark: '#0f172a',
    darkSecondary: '#1e293b',
    darkHover: '#334155',
    light: '#f8fafc',
    lightSecondary: '#f1f5f9',
    subtle: '#f8fafc',
  },

  // Colores de Texto
  text: {
    primary: '#0f172a',
    secondary: '#64748b',
    disabled: '#94a3b8',
    hint: '#64748b',
    // Texto sobre fondos oscuros
    darkPrimary: '#ffffff',
    darkSecondary: '#cbd5e1',
    // Texto de marca (primary)
    brand: '#8b5cf6',
    brandLight: '#a78bfa',
  },

  // Colores de Bordes
  border: {
    light: '#e2e8f0',
    main: '#cbd5e1',
    dark: '#94a3b8',
    focus: '#8b5cf6', // Primary para focus
    error: '#ef4444',
    success: '#10b981',
  },

  // Colores para gráficos y visualizaciones (Data Visualization)
  chart: {
    primary: '#8b5cf6',
    secondary: '#06b6d4',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#06b6d4',
    // Colores adicionales para múltiples series (paleta moderna)
    series1: '#8b5cf6', // Violeta
    series2: '#06b6d4', // Cyan
    series3: '#10b981', // Esmeralda
    series4: '#f59e0b', // Ámbar
    series5: '#ef4444', // Rojo
    series6: '#ec4899', // Rosa
    series7: '#3b82f6', // Azul
    series8: '#14b8a6', // Teal
  },
} as const;

// Tipo para los colores (útil para TypeScript)
export type ColorPalette = typeof colors;
