import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DiagnoseScreen from '../screens/DiagnoseScreen/DiagnoseScreen';
import MyGardenScreen from '../screens/MyGardenScreen/MyGardenScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

type BottomTabParamList = {
  Home: undefined;
  Diagnose: undefined;
  MyGarden: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName: string = '';

        //   switch (route.name) {
        //     case 'Home':
        //       iconName = focused ? 'home' : 'home-outline';
        //       break;
        //     case 'Diagnose':
        //       iconName = focused ? 'medkit' : 'medkit-outline';
        //       break;
        //     case 'MyGarden':
        //       iconName = focused ? 'leaf' : 'leaf-outline';
        //       break;
        //     case 'Profile':
        //       iconName = focused ? 'person' : 'person-outline';
        //       break;
        //     default:
        //       iconName = 'ellipse';
        //   }

        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
        tabBarActiveTintColor: '#6200EE',
        tabBarInactiveTintColor: '#999999',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Diagnose" component={DiagnoseScreen} />
      <Tab.Screen name="MyGarden" component={MyGardenScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
