/* eslint-disable global-require */
import React from 'react';
import {View, Image} from 'react-native';
import Style from './splashscreen.style';

const SplashScreenUI = () => {
  return (
    <View style={Style.container}>
      <Image
        style={Style.image1}
        source={require('../../assets/images/logo-futsaltown.png')}
        resizeMode="contain"
      />
      <Image
        style={Style.image2}
        source={require('../../assets/images/text-logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreenUI;
