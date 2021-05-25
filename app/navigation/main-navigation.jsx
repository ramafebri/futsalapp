import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ContactScreen from '../screens/contact-screen/contact.con';
import DetailScreen from '../screens/detail-screen/detail.con';
import EditProfileScreen from '../screens/edit-profile-screen/editprof.con';
import FaqScreen from '../screens/faq-screen/faq.con';
import HistoryDetailScreen from '../screens/history-detail-screen/history-detail.con';
import LoginScreen from '../screens/login-screen/login.con';
import ReservationScreen from '../screens/reservation-screen/reservation.con';
import ReservationSuccessScreen from '../screens/reservation-screen/reservation-success.con';
import RegisterScreen from '../screens/register-screen/register.con';
import SplashScreen from '../screens/splash-screen/splashscreen.con';
import BottomNavigation from './bottom-navigation';

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Splash Screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash Screen" component={SplashScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      <Stack.Screen name="FAQ" component={FaqScreen} />
      <Stack.Screen name="History Detail" component={HistoryDetailScreen} />
      <Stack.Screen name="Login Screen" component={LoginScreen} />
      <Stack.Screen name="Reservation Detail" component={ReservationScreen} />
      <Stack.Screen
        name="Reservation Success"
        component={ReservationSuccessScreen}
      />
      <Stack.Screen name="Register Screen" component={RegisterScreen} />
      <Stack.Screen name="Bottom Tabs" component={BottomNavigation} />
    </Stack.Navigator>
  );
}
