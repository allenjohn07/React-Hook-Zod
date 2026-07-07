/**
 * Central design tokens for the app.
 * Keeping colors, spacing, radii and typography in one place guarantees
 * a consistent, professional look across every screen and component.
 */

export const colors = {
  // Brand
  primary: '#2563EB',
  primaryDark: '#1D4ED8',
  primaryMuted: '#DBEAFE',

  // Neutrals
  background: '#F8FAFC',
  surface: '#FFFFFF',
  border: '#E2E8F0',
  borderFocused: '#2563EB',

  // Text
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  textPlaceholder: '#94A3B8',
  textOnPrimary: '#FFFFFF',

  // States
  error: '#DC2626',
  errorMuted: '#FEF2F2',
  errorBorder: '#FCA5A5',
  success: '#16A34A',
  disabled: '#CBD5E1',
  disabledText: '#94A3B8',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  pill: 999,
} as const;

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 22,
  xxl: 28,
} as const;

export const theme = {
  colors,
  spacing,
  radii,
  fontSizes,
} as const;

export type Theme = typeof theme;
