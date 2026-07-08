import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { colors } from '../src/theme';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          headerTitleStyle: {
            fontWeight: '700',
            color: colors.textPrimary,
          },
          headerStyle: {
            backgroundColor: colors.surface,
            borderBottomColor: colors.border,
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          tabBarStyle: {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
            height: 60,
            paddingBottom: 8,
            paddingTop: 6,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Employee Information',
            tabBarLabel: 'Employee',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'people' : 'people-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="sign-in"
          options={{
            title: 'Sign In',
            tabBarLabel: 'Sign In',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'log-in' : 'log-in-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="sign-up"
          options={{
            title: 'Sign Up',
            tabBarLabel: 'Sign Up',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? 'person-add' : 'person-add-outline'}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
