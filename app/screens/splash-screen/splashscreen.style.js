import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006F57',
  },
  image1: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  image2: {
    width: 260,
    height: 60,
  },
});

export default main;
