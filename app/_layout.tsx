import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { TabBar } from '../src/components/TabBar';
import { colors } from '../src/theme';

export default function RootLayout() {
  return (
    <>
      <Tabs
        tabBar={() => <TabBar />}
        screenOptions={{
          headerTitleStyle: {
            fontWeight: '700',
            color: colors.textPrimary,
          },
          headerStyle: {
            backgroundColor: colors.surface,
            borderBottomColor: colors.border,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{ title: 'Employee Information' }}
        />
        <Tabs.Screen
          name="sign-in"
          options={{ title: 'Sign In' }}
        />
        <Tabs.Screen
          name="sign-up"
          options={{ title: 'Sign Up' }}
        />
      </Tabs>
      <StatusBar style="auto" />
    </>
  );
}
