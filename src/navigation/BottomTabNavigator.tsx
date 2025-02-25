import React from 'react';
import { View, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DiagnoseScreen from '../screens/DiagnoseScreen/DiagnoseScreen';
import MyGardenScreen from '../screens/MyGardenScreen/MyGardenScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import { colors } from '../theme/colors';
import { HomeIcon, DiagnoseIcon, MyGardenIcon, ProfileIcon, ScanIcon } from '../utils/icons/Icons';

const EmptyScreen = () => <View />;

type BottomTabParamList = {
  Home: undefined;
  Diagnose: undefined;
  MyGarden: undefined;
  Profile: undefined;
  Empty: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const handleScanPress = (event: GestureResponderEvent) => {
  console.log('Scan Butona tıklandı');
};

const CustomTabButton = ({ onPress }: { onPress?: (event: GestureResponderEvent) => void }) => {
  return (
    <TouchableOpacity
      style={styles.customButtonContainer}
      onPress={(event) => {
        handleScanPress(event);
      }}
      activeOpacity={0.7}
    >
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0)']}
        style={styles.insetShadow}
      >
        <View style={styles.customButton}>
          <ScanIcon width={23} height={21} fill={colors.white} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};


const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIcon: ({ focused, color }) => {
          const iconProps = { stroke: focused ? colors.primary : colors.greyTwo, fill: focused ? colors.primary : colors.greyTwo };
          switch (route.name) {
            case 'Home':
              return <HomeIcon width={20} height={20} {...iconProps} />;
            case 'Diagnose':
              return <DiagnoseIcon width={18} height={20} {...iconProps} />;
            case 'MyGarden':
              return <MyGardenIcon width={21} height={23} {...iconProps} />;
            case 'Profile':
              return <ProfileIcon width={19} height={19} {...iconProps} />;
            default:
              return <HomeIcon width={21} height={23} />;
          }
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.greyTwo,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Diagnose"
        component={DiagnoseScreen}
        options={{ tabBarLabel: 'Diagnose' }}
      />

      <Tab.Screen
        name="Empty"
        component={EmptyScreen}
        options={{
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      />

      <Tab.Screen
        name="MyGarden"
        component={MyGardenScreen}
        options={{ tabBarLabel: 'My Garden' }}
      />
      <Tab.Screen name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    backgroundColor: colors.white,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: 400,
    textAlign: 'left',
    fontFamily: "Rubik-Regular",
    lineHeight: 11.85,
    letterSpacing: -0.24,
  },
  customButtonContainer: {
    top: -24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insetShadow: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.primary2,
    borderWidth: 4,
    overflow: 'hidden',
  },
  customButton: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
