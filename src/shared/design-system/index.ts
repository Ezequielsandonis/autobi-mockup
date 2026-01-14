/**
 * Design System - Exportaciones Centralizadas
 * 
 * Este archivo exporta todos los design tokens del sistema de diseño
 * para facilitar su importación en los componentes.
 * 
 * Uso:
 * import { colors, spacing, typography } from '@/shared/design-system';
 */

export { colors } from './colors';
export type { ColorPalette } from './colors';

export { spacing, spacingPresets } from './spacing';
export type { SpacingScale, SpacingPresets } from './spacing';

export { typography } from './typography';
export type { TypographyScale, TypographyVariant } from './typography';
