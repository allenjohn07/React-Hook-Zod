import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { usePathname } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { colors, fontSizes, radii, spacing } from '../theme';

/** Maps file-based routes to readable labels for the UI. */
const routeLabels: Record<string, string> = {
  '/': 'Employee Information',
  '/sign-in': 'Sign In',
  '/sign-up': 'Sign Up',
};

/**
 * Displays the current Expo Router path so route changes are visible
 * when navigating between tabs or in-screen links.
 */
export function RouteIndicator() {
  const pathname = usePathname();
  const label = routeLabels[pathname] ?? pathname;

  return (
    <View style={styles.container}>
      <Ionicons name="navigate-outline" size={14} color={colors.primary} />
      <Text style={styles.path}>{pathname}</Text>
      <Text style={styles.separator}>·</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primaryMuted,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radii.pill,
    marginBottom: spacing.lg,
    gap: spacing.xs,
  },
  path: {
    fontSize: fontSizes.xs,
    fontWeight: '700',
    color: colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
  },
  separator: {
    fontSize: fontSizes.xs,
    color: colors.textSecondary,
  },
  label: {
    fontSize: fontSizes.xs,
    color: colors.textSecondary,
  },
});
