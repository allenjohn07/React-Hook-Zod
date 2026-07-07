import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors, fontSizes, radii, spacing } from '../theme';
import type { CustomButtonProps } from '../types/components';

/**
 * Reusable button with clearly distinct enabled, disabled and loading states.
 * Uses Pressable so we can visually respond to the press-in state as well.
 */
export function CustomButton({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = 'primary',
  icon,
  style,
}: CustomButtonProps) {
  const isDisabled = disabled || loading;
  const isSecondary = variant === 'secondary';

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      style={({ pressed }) => [
        styles.base,
        isSecondary ? styles.secondary : styles.primary,
        pressed && !isDisabled && styles.pressed,
        isDisabled && (isSecondary ? styles.secondaryDisabled : styles.disabled),
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={isSecondary ? colors.primary : colors.textOnPrimary}
        />
      ) : (
        <View style={styles.content}>
          {icon ? (
            <Ionicons
              name={icon}
              size={18}
              color={
                isDisabled
                  ? colors.disabledText
                  : isSecondary
                    ? colors.primary
                    : colors.textOnPrimary
              }
              style={styles.icon}
            />
          ) : null}
          <Text
            style={[
              styles.label,
              isSecondary ? styles.labelSecondary : styles.labelPrimary,
              isDisabled && styles.labelDisabled,
            ]}
          >
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 52,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },
  disabled: {
    backgroundColor: colors.disabled,
  },
  secondaryDisabled: {
    borderColor: colors.disabled,
    backgroundColor: colors.surface,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: spacing.sm,
  },
  label: {
    fontSize: fontSizes.md,
    fontWeight: '600',
  },
  labelPrimary: {
    color: colors.textOnPrimary,
  },
  labelSecondary: {
    color: colors.primary,
  },
  labelDisabled: {
    color: colors.disabledText,
  },
});
