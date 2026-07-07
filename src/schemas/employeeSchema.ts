import { z } from 'zod';

/** Canadian postal code format: A1A 1A1 (space optional). */
const POSTAL_CODE_REGEX = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

/** North American phone number (10 digits, optional country code / formatting). */
const PHONE_REGEX =
  /^(\+?1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

export const employeeSchema = z.object({
  fullName: z
    .string()
    .min(1, 'Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be at most 50 characters'),

  email: z
    .email('Please enter a valid email address')
    .min(1, 'Email is required'),

  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(PHONE_REGEX, 'Please enter a valid phone number (e.g. 403-555-1234)'),

  jobTitle: z
    .string()
    .min(1, 'Job title is required')
    .min(2, 'Job title must be at least 2 characters')
    .max(60, 'Job title must be at most 60 characters'),

  postalCode: z
    .string()
    .min(1, 'Postal code is required')
    .regex(
      POSTAL_CODE_REGEX,
      'Please enter a valid postal code (e.g. T2N 1N4)',
    ),

  department: z
    .string()
    .min(1, 'Department is required')
    .min(2, 'Department must be at least 2 characters')
    .max(50, 'Department must be at most 50 characters'),
});

export type EmployeeFormData = z.infer<typeof employeeSchema>;
