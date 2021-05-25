import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeIcon,
  HistoryIcon,
  ProfileIcon,
} from '../component/BottomNavigationIcon';
import BottomNavigationBar from '../component/BottomNavigationBar';
import HomeScreen from '../screens/home-screen/index.con';
import HistoryScreen from '../screens/history-screen/history.con';
import ProfileScreen from '../screens/profile-screen/profile.con';

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={(props) => <BottomNavigationBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({color}) => <HistoryIcon color={color} />,
          tabBarLabel: 'History',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon color={color} />,
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}
