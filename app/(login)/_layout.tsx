import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}>
      <Tabs.Screen
        name="Login"
        options={{
          title: 'Sign in',
          tabBarIcon: ({ color }) => <TabBarIcon name="sign-in" color={color} />,
          tabBarStyle: { display: 'none' }, // Hide this tab


        }}
      />
         <Tabs.Screen
        name="SignUp"
        options={{
          title: 'Sign Up',
          tabBarIcon: ({ color }) => <TabBarIcon name="sign-in" color={color} />,
          tabBarStyle: { display: 'none' }, // Hide this tab

        }}
      />
      
      
    </Tabs>
  );
}
