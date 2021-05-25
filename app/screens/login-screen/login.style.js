import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewTextError: {
    width,
    alignItems: 'center',
    height: 30,
    marginTop: 20,
  },
  viewTextInput: {
    width,
    alignItems: 'center',
    marginTop: 20,
  },
  viewText: {
    width,
    alignItems: 'center',
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewIndicator: {
    width: 35,
    height: 35,
    position: 'absolute',
    top: 300,
    alignItems: 'center',
    alignSelf: 'center',
  },
  textDontHave: {
    fontWeight: '300',
  },
  textRegister: {
    fontWeight: 'bold',
  },
});

export default main;
