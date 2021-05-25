import React from 'react';
import {Text} from 'react-native';
import * as Styles from '../assets/styles';

export const Regular = ({styles, children, onPress}) => {
  return (
    <Text style={{...Styles.text.regular, ...styles}} onPress={onPress}>
      {children}
    </Text>
  );
};

export const Light = ({styles, children}) => {
  return <Text style={{...Styles.text.light, ...styles}}>{children}</Text>;
};

export const Bold = ({styles, children}) => {
  return <Text style={{...Styles.text.bold, ...styles}}>{children}</Text>;
};
