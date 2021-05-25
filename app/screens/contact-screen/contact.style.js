import {StyleSheet} from 'react-native';

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewMain: {
    width: '90%',
    height: 290,
    marginTop: 25,
    borderRadius: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
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
  view1: {
    width: '100%',
    height: 290,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 24,
    color: '#505050',
    marginTop: 20,
  },
  text1: {
    fontWeight: 'normal',
    fontSize: 18,
    color: '#505050',
    marginTop: 17,
    textAlign: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default main;
