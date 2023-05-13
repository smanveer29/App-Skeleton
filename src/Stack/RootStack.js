import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import screens from '../Constants/screens';

const Stack = createStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screens.SPLASH} />
    </Stack.Navigator>
  );
};

export default RootStack;
