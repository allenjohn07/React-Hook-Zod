import React from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import { CustomInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustomButton';
import { employeeSchema, type EmployeeFormData } from '../schemas/employeeSchema';
import { colors, fontSizes, radii, spacing } from '../theme';

export function EmployeeScreen() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      jobTitle: '',
      postalCode: '',
      department: '',
    },
  });

  const onSubmit = (data: EmployeeFormData) => {
    Alert.alert(
      'Employee Saved',
      `${data.fullName} (${data.jobTitle}) has been submitted successfully.`,
      [{ text: 'OK', onPress: () => reset() }],
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.iconBadge}>
            <Ionicons name="people" size={28} color={colors.primary} />
          </View>
          <Text style={styles.title}>Employee Information</Text>
          <Text style={styles.subtitle}>
            Fill in the details below. All fields are required.
          </Text>
        </View>

        <View style={styles.card}>
          <CustomInput
            control={control}
            name="fullName"
            label="Full Name"
            icon="person-outline"
            placeholder="Jane Doe"
            autoCapitalize="words"
          />
          <CustomInput
            control={control}
            name="email"
            label="Email"
            icon="mail-outline"
            placeholder="jane.doe@company.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <CustomInput
            control={control}
            name="phone"
            label="Phone Number"
            icon="call-outline"
            placeholder="403-555-1234"
            keyboardType="phone-pad"
          />
          <CustomInput
            control={control}
            name="jobTitle"
            label="Job Title"
            icon="briefcase-outline"
            placeholder="Software Developer"
            autoCapitalize="words"
          />
          <CustomInput
            control={control}
            name="department"
            label="Department"
            icon="business-outline"
            placeholder="Engineering"
            autoCapitalize="words"
          />
          <CustomInput
            control={control}
            name="postalCode"
            label="Postal Code"
            icon="location-outline"
            placeholder="T2N 1N4"
            autoCapitalize="characters"
          />

          <CustomButton
            title="Submit"
            icon="checkmark-circle-outline"
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid}
            loading={isSubmitting}
            style={styles.submitButton}
          />
        </View>

        <CustomButton
          title="Go to Sign In"
          variant="secondary"
          icon="log-in-outline"
          onPress={() => router.push('/sign-in')}
          style={styles.linkButton}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  iconBadge: {
    width: 56,
    height: 56,
    borderRadius: radii.pill,
    backgroundColor: colors.primaryMuted,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  title: {
    fontSize: fontSizes.xxl,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: fontSizes.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },
  submitButton: {
    marginTop: spacing.sm,
  },
  linkButton: {
    marginTop: spacing.lg,
  },
});
