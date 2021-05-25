import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const main = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  viewHeader: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 0,
  },
  viewMain: {
    width,
    height: 240,
    backgroundColor: '#006F57',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    fontSize: 24,
    fontWeight: '500',
    color: 'white',
  },
  textPhone: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'white',
    marginTop: 17,
  },
  button: {
    marginTop: 50,
  },
  buttonLogout: {
    marginTop: 80,
    alignSelf: 'center',
    marginBottom: 20
  },

  viewContact: {
    width,
    height: 55,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    marginTop: 15,
  },
  viewContact1: {
    flex: 2,
    paddingLeft: 25,
    justifyContent: 'center',
  },
  viewContact2: {
    flex: 1,
    paddingRight: 25,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textContact: {
    fontSize: 14,
    fontWeight: '500',
    color: '#006F57',
  },
});

export default main;
