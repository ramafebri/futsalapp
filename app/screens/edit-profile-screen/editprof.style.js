import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewMain: {
    width: '90%',
    height: 371,
    marginTop: 25,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginBottom: 10,
  },
  viewIndicator: {
    width: '100%',
    height: 35,
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    alignSelf: 'center',
  },
  button: {
    marginTop: 30,
    alignSelf: 'center',
  },
  viewTextError: {
    width,
    alignItems: 'center',
    height: 25,
    marginTop: 20,
  },
  textInput: {
    borderBottomWidth: 1.5,
  },
});

export default main;
