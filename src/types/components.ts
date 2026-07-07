import type { Control, FieldValues, Path } from 'react-hook-form';
import type {
  KeyboardTypeOptions,
  StyleProp,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import type { Ionicons } from '@expo/vector-icons';

/** Any valid Ionicons glyph name. */
export type IoniconName = keyof typeof Ionicons.glyphMap;

/**
 * Props for the reusable, React-Hook-Form-aware text input.
 * Generic over the form's field-values type so `name` is fully type-safe.
 */
export interface CustomInputProps<TFieldValues extends FieldValues>
  extends Omit<TextInputProps, 'value' | 'onChangeText' | 'onBlur'> {
  /** RHF control object from `useForm`. */
  control: Control<TFieldValues>;
  /** Type-safe field name that must exist on the form schema. */
  name: Path<TFieldValues>;
  /** Visible label rendered above the input. */
  label: string;
  /** Optional leading icon shown inside the input. */
  icon?: IoniconName;
  /** Renders a password field with a show/hide toggle. */
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  /** Optional style override for the outer wrapper. */
  containerStyle?: StyleProp<ViewStyle>;
}

export type ButtonVariant = 'primary' | 'secondary';

/** Props for the reusable button with enabled/disabled/loading states. */
export interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  icon?: IoniconName;
  style?: StyleProp<ViewStyle>;
}
