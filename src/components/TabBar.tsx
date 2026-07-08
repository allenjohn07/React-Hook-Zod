import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import { usePathname, useRouter, type Href } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { colors, fontSizes } from '../theme';
import type { IoniconName } from '../types/components';

type TabConfig = {
  href: Href;
  label: string;
  paths: string[];
  icon: IoniconName;
  activeIcon: IoniconName;
};

const TABS: TabConfig[] = [
  {
    href: '/',
    label: 'Employee',
    paths: ['/', '/index'],
    icon: 'people-outline',
    activeIcon: 'people',
  },
  {
    href: '/sign-in',
    label: 'Sign In',
    paths: ['/sign-in'],
    icon: 'log-in-outline',
    activeIcon: 'log-in',
  },
  {
    href: '/sign-up',
    label: 'Sign Up',
    paths: ['/sign-up'],
    icon: 'person-add-outline',
    activeIcon: 'person-add',
  },
];

export function TabBar() {
  const pathname = usePathname();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: Math.max(insets.bottom, Platform.OS === 'web' ? 8 : 0) },
      ]}
    >
      {TABS.map((tab) => {
        const isActive = tab.paths.includes(pathname);
        const tint = isActive ? colors.primary : colors.textSecondary;

        return (
          <Pressable
            key={tab.label}
            style={styles.tab}
            onPress={() => router.push(tab.href)}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
          >
            <Ionicons
              name={isActive ? tab.activeIcon : tab.icon}
              size={24}
              color={tint}
            />
            <Text style={[styles.label, { color: tint }]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    gap: 4,
  },
  label: {
    fontSize: fontSizes.xs,
    fontWeight: '600',
    textAlign: 'center',
  },
});
