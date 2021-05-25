/* eslint-disable consistent-return */
/* eslint-disable no-alert */
/* eslint-disable global-require */
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react-lite';
import rootStore from '../models/root';
import * as Styles from '../assets/styles';
import ArrowRightIcon from '../assets/svg/chevron-right.svg';

export const Login = ({styles}) => {
  return (
    <View style={{...Styles.headerLogin.container, ...styles}}>
      <View style={{...Styles.headerLogin.view1}}>
        <Image
          style={{...Styles.headerLogin.image}}
          source={require('../assets/images/logo-futsaltown.png')}
          resizeMode="contain"
        />
      </View>
      <View style={{...Styles.headerLogin.view2}}>
        <Text style={{...Styles.headerLogin.text}}>Reservasi{'\n'}Futsal</Text>
      </View>
    </View>
  );
};

export const Regular = ({styles, routeName, name}) => {
  return (
    <View style={{...Styles.header.container, ...styles}}>
      <View style={{...Styles.header.view1}}>
        <Image
          style={{...Styles.header.image1}}
          source={require('../assets/images/logo-futsaltown.png')}
          resizeMode="contain"
        />
      </View>
      <View style={{...Styles.header.view2}}>
        <Text style={{...Styles.header.textRegular}}>{routeName}</Text>
      </View>
      <View style={{...Styles.header.view3}}>
        <Text style={{...Styles.header.textLight}}>
          Hi, {name.split(' ')[0]}!
        </Text>
      </View>
    </View>
  );
};

export const Secondary = observer(
  ({styles, routeName, isDetailScreen, goBack}) => {
    const onPressBack = () => {
      if (isDetailScreen) {
        if (rootStore.jamMain.items.length > 0) {
          alert('uncheck the time that has been selected');
        } else {
          goBack();
          return true;
        }
      } else {
        goBack();
        return true;
      }
    };

    return (
      <View style={{...Styles.header.container, ...styles}}>
        <TouchableOpacity
          style={{...Styles.header.view1}}
          onPress={onPressBack}>
          <ArrowRightIcon />
        </TouchableOpacity>
        <View
          style={{
            ...Styles.header.view2,
            width: '70%',
            alignItems: 'flex-start',
          }}>
          <Text style={{...Styles.header.textRegular}}>{routeName}</Text>
        </View>
      </View>
    );
  },
);
