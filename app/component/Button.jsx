import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import * as Styles from '../assets/styles';

export const Regular = ({styles, text, textStyle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...Styles.button.regular, ...styles}}>
      <Text style={{...Styles.button.textButton, ...textStyle}}>{text}</Text>
    </TouchableOpacity>
  );
};

export const Logout = ({styles, textStyle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...Styles.button.logout, ...styles}}>
      <Text style={{...Styles.button.textButtonLogout, ...textStyle}}>
        Log Out
      </Text>
    </TouchableOpacity>
  );
};

export const EditProfile = ({styles, textStyle, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...Styles.button.editProfile, ...styles}}>
      <Text style={{...Styles.button.textButtonEditProfile, ...textStyle}}>
        Edit Profile
      </Text>
    </TouchableOpacity>
  );
};
