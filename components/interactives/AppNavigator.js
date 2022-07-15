import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Ionicons } from '@expo/vector-icons';

import { HomeScreen, ProfileScreen } from '../../App';


import { StatusBar } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }}>
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'home' : 'home-outline'}
              color={focused ? 'blue' : '#272727'}
            />
          ),
        }}
        component={HomeScreen}
        name='Home'
      />
      <Tab.Screen
        options={{
          title: ({ color, focused }) => (
            <Ionicons
              size={25}
              name={focused ? 'people-sharp' : 'people-outline'}
              color={focused ? 'blue' : '#272727'}
            />
          ),
        }}
        component={ProfileScreen}
        name='Friends'
      />

    </Tab.Navigator>
  );
};

export default AppNavigator;