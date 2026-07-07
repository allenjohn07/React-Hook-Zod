import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Controller, type FieldValues } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';

import { colors, fontSizes, radii, spacing } from '../theme';
import type { CustomInputProps } from '../types/components';

/**
 * Reusable, React-Hook-Form-connected text input.
 *
 * Features:
 *  - Controller integration (value / onChange / onBlur wired automatically)
 *  - Focus state styling (border + subtle background)
 *  - Error state styling (label, border, background, message + icon)
 *  - Optional leading icon and password show/hide toggle
 */
export function CustomInput<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  icon,
  secureTextEntry = false,
  containerStyle,
  ...textInputProps
}: CustomInputProps<TFieldValues>) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        const hasError = Boolean(error);

        return (
          <View style={[styles.container, containerStyle]}>
            <Text style={[styles.label, hasError && styles.labelError]}>
              {label}
            </Text>

            <View
              style={[
                styles.inputWrapper,
                isFocused && styles.inputWrapperFocused,
                hasError && styles.inputWrapperError,
              ]}
            >
              {icon ? (
                <Ionicons
                  name={icon}
                  size={20}
                  color={
                    hasError
                      ? colors.error
                      : isFocused
                        ? colors.primary
                        : colors.textSecondary
                  }
                  style={styles.leadingIcon}
                />
              ) : null}

              <TextInput
                style={styles.input}
                value={value as string | undefined}
                onChangeText={onChange}
                onBlur={() => {
                  setIsFocused(false);
                  onBlur();
                }}
                onFocus={() => setIsFocused(true)}
                secureTextEntry={secureTextEntry && !isPasswordVisible}
                placeholderTextColor={colors.textPlaceholder}
                {...textInputProps}
              />

              {secureTextEntry ? (
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible((prev) => !prev)}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityLabel={
                    isPasswordVisible ? 'Hide password' : 'Show password'
                  }
                >
                  <Ionicons
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    size={20}
                    color={colors.textSecondary}
                  />
                </TouchableOpacity>
              ) : null}
            </View>

            {hasError ? (
              <View style={styles.errorRow}>
                <Ionicons
                  name="alert-circle"
                  size={14}
                  color={colors.error}
                  style={styles.errorIcon}
                />
                <Text style={styles.errorText}>{error?.message}</Text>
              </View>
            ) : null}
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: fontSizes.sm,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  labelError: {
    color: colors.error,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radii.md,
  },
  inputWrapperFocused: {
    borderColor: colors.borderFocused,
    backgroundColor: colors.primaryMuted,
  },
  inputWrapperError: {
    borderColor: colors.errorBorder,
    backgroundColor: colors.errorMuted,
  },
  leadingIcon: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: fontSizes.md,
    color: colors.textPrimary,
    paddingVertical: 0,
  },
  errorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  errorIcon: {
    marginRight: spacing.xs,
  },
  errorText: {
    flex: 1,
    fontSize: fontSizes.xs,
    color: colors.error,
  },
});
