import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DiagnoseScreen from '../screens/DiagnoseScreen/DiagnoseScreen';
import MyGardenScreen from '../screens/MyGardenScreen/MyGardenScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { colors } from '../theme/colors';
import { HomeIcon, DiagnoseIcon, MyGardenIcon, ProfileIcon } from '../utils/icons/Icons';

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
        tabBarIcon: ({ focused, color, size }) => {
          const iconProps = { stroke: focused ? colors.primary : colors.greyTwo, fill: focused ? colors.primary : colors.greyTwo };
          switch (route.name) {
            case 'Home':
              return <HomeIcon key={focused ? 'focused' : 'unfocused'} width={20} height={20}  {...iconProps} />
              break;
            case 'Diagnose':
              return <DiagnoseIcon key={focused ? 'focused' : 'unfocused'} width={18} height={20}   {...iconProps} />
              break;
            case 'MyGarden':
              return <MyGardenIcon key={focused ? 'focused' : 'unfocused'} width={21} height={23}  {...iconProps} />
              break;
            case 'Profile':
              return <ProfileIcon key={focused ? 'focused' : 'unfocused'} width={19} height={19}  {...iconProps} />
              break;
            default:
              return <HomeIcon key={focused ? 'focused' : 'unfocused'} width={21} height={23} />
          }
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.greyTwo,
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
