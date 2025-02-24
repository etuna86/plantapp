import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from './types';
import StartScreen from '../screens/StartScreen/StartScreen';
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import ChooseMembershipScreen from '../screens/ChooseMembership/ChooseMembershipScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="ChooseMembership" component={ChooseMembershipScreen} />
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
  );
};

export default RootNavigator;
