import React from 'react';
import {observer} from 'mobx-react-lite';
import AsyncStorage from '@react-native-community/async-storage';
import * as Constant from '../../config/constants';
import rootStore from '../../models/root';
import ProfileUI from './profile.pres';

const Profile = observer(({navigation, route}) => {
  const moveToEditProfile = () => {
    navigation.navigate('Edit Profile');
  };
  const moveToContact = () => {
    navigation.navigate('Contact');
  };
  const moveToFaq = () => {
    navigation.navigate('FAQ');
  };
  const logout = async () => {
    await AsyncStorage.removeItem(Constant.USER_ID);
    rootStore.userData.deleteUserData();
    navigation.replace('Login Screen');
  };

  return (
    <ProfileUI
      routeName={route.name}
      moveToEditProfile={moveToEditProfile}
      moveToContact={moveToContact}
      moveToFaq={moveToFaq}
      logout={logout}
    />
  );
});

export default Profile;
